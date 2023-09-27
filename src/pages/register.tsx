import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
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
