import { useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }),
});

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (!user) return;

    if (user.role === "admin") {
      navigate("/admindashboard");
    } else {
      navigate("/roomdetail");
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    try {
      const ok = await login(data);
      if (ok) {
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">SIGN IN</h1>
        <div className="container w-full max-w-2xl bg-white shadow-md p-8 border border-gray-200">
          <div className="flex justify-end gap-2 my-2">
            <p className="text-gray-500 text-sm ">You're new here? </p>
            <Link to="/register">
              <p className="text-sm text-end font-semibold hover:underline underline-offset-2 mb-1">
                Create an account
              </p>
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={`w-full px-4 py-3 border focus:ring-2 focus:ring-black focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className={`w-full px-4 py-3 border  focus:ring-2 focus:ring-black focus:outline-none ${errors.password ? "border-red-500" : ""}`}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-(--color-main4) hover:bg-[#e9decf] text-gray-700 font-medium py-3  transition disabled:opacity-70"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="text-right mt-2">
            <Link to="/forgetpassword" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* <div className="my-6 flex items-center gap-4">
            <span className="grow h-px bg-gray-300"></span>
            <span className="text-gray-500 text-sm">Or continue with</span>
            <span className="grow h-px bg-gray-300"></span>
          </div> */}

          {/* <form className="grid grid-cols-2 gap-4 mb-6">
            <Link to="/roomdetail">
              <button className="w-full border  py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
              </button>
            </Link>
            <Link to="/roomdetail">
              <button className="w-full border  py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="https://files.svgcdn.io/streamline-color/meta.svg" className="w-5" />
              </button>
            </Link>
          </form> */}
        </div>
      </main>
    </>
  );
};

export default Login;
