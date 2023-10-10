import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
import { useUser } from "~/utils/atoms";

type Inputs = {
  username: string;
  password: string;
};

const gradient = {
  background: "rgb(22, 33, 62, 0.8)",
  height: "40%",
  width: "30%",
  top: 0,
  left: 0,
  borderRadius: "0  0 100%",
  filter: "blur(80px)",
  zIndex: -1,
};

const gradient2 = {
  background: "rgb(22, 33, 62, 0.5)",
  height: "20%",
  width: "30%",
  right: 0,
  bottom: 0,
  borderRadius: "100% 0 0 ",
  filter: "blur(80px)",
  zIndex: -1,
};

export default function LoginPage() {
  const { push } = useRouter();
  const [user, setUser] = useUser();

  const { mutateAsync: loginUser } = api.auth.login.useMutation({
    onSuccess: (data) => {
      push(`/${data.username}`);
      setUser(data);
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => loginUser(data);

  return (
    <>
      <div className="absolute" style={gradient} />
      <div className="absolute" style={gradient2} />
      <div className="flex h-screen items-center justify-center">
        <div>
          <h1 className="mb-16 text-center text-4xl font-semibold">
            Register to VsetikUI
          </h1>
          <form className="min-w-[450px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                className="w-full rounded-lg border-2 border-gray-300 p-1.5 text-black"
                placeholder="Username"
                {...register("username")}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="w-full rounded-lg border-2 border-gray-300 p-1.5 text-black"
                placeholder="Password"
                {...register("password")}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="rounded bg-white px-6 py-1.5 text-sm font-semibold text-black transition-all hover:bg-white/80"
                type="submit"
              >
                Login
              </button>
              <Link
                className="text-sm font-semibold transition-all hover:text-white/80"
                href="/register"
              >
                Do not have an accout?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
