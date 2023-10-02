import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const gradient = {
  background: "rgb(22, 33, 62, 0.8)",
  height: "40%",
  width: "30%",
  position: "absolute",
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
  position: "absolute",
  right: 0,
  bottom: 0,
  borderRadius: "100% 0 0 ",
  filter: "blur(80px)",
  zIndex: -1,
};

export default function RegisterPage() {
  const { mutateAsync: registerUser } = api.auth.register.useMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => registerUser(data);

  return (
    <>
      <div style={gradient} />
      <div style={gradient2} />
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
                type="email"
                className="w-full rounded-lg border-2 border-gray-300 p-1.5 text-black"
                placeholder="Email"
                {...register("email")}
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
            <div className="mb-8">
              <input
                type="password"
                className="w-full rounded-lg border-2 border-gray-300 p-1.5 text-black"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="rounded bg-white px-6 py-1.5 text-sm font-semibold text-black transition-all hover:bg-white/80"
                type="submit"
              >
                Register
              </button>
              <Link
                className="text-sm font-semibold transition-all hover:text-white/80"
                href="/login"
              >
                Already registered?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
