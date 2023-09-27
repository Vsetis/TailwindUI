import { loginSchema, registerSchema } from "~/utils/schema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import crypto from "crypto";
import { hash, verify } from "argon2";
import { TRPCError } from "@trpc/server";
import cookie from "cookie";

export const authRouter = createTRPCRouter({
  session: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.token) return null;

    const hash = crypto
      .createHash("sha256")
      .update(ctx.token)
      .digest("base64url");

    const session = await ctx.db.session.update({
      where: {
        hash,
      },
      data: {},
      select: {
        id: true,
        userId: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return session?.user;
  }),

  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const userExist = await ctx.db.user.findFirst({
        where: {
          OR: [
            {
              username: input.username,
            },
            {
              email: input.email,
            },
          ],
        },
      });
      if (userExist) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "username or emaile is already exist",
        });
      }

      const user = await ctx.db.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: await hash(input.password),
        },
      });

      return user;
    }),

  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        username: input.username,
      },
    });

    if (!user || !(await verify(user.password, input.password)))
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "invalid credentials",
      });

    const token = crypto.randomBytes(32).toString("base64url");

    const hash = crypto.createHash("sha256").update(token).digest("base64url");

    const sessionData = {
      hash,
      userId: user.id,
    };

    const session = await ctx.db.session.create({
      data: sessionData,
      select: {
        id: true,
        userId: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    ctx.setHeader("Set-Cookie", [
      cookie.serialize("sessionToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        path: "/",
      }),
    ]);

    return session.user;
  }),

  logout: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.session.delete({
      where: {
        id: ctx.session.id,
      },
    });

    ctx.setHeader("Set-Cookie", [
      cookie.serialize("sessionToken", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        path: "/",
      }),
    ]);

    return;
  }),
});
