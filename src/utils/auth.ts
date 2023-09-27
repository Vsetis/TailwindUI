import crypto from "crypto";
import { db } from "../server/db";

export async function getServerSession(token?: string) {
  if (!token) return;

  const hash = crypto.createHash("sha256").update(token).digest("base64url");

  const session = await db.session.findUnique({
    where: {
      hash,
    },
    select: {
      id: true,
      userId: true,
    },
  });
  return session;
}
