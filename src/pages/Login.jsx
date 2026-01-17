import { useEffect, useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useOutletContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!user) return;

    if (user.role === "admin") {
      navigate("/asideadmin");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const ok = await login({ email, password });

      setSubmitting(false);

      if (ok) {
        setEmail("");
        setPassword("");
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 border focus:ring-2 focus:ring-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border  focus:ring-2 focus:ring-black focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-(--color-main4) hover:bg-[#e9decf] text-gray-700 font-medium py-3  transition"
            >
              Log in
            </button>
          </form>

          <div className="text-right mt-2">
            <Link
              to="/forgetpassword"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="grow h-px bg-gray-300"></span>
            <span className="text-gray-500 text-sm">Or continue with</span>
            <span className="grow h-px bg-gray-300"></span>
          </div>

          <form className="grid grid-cols-2 gap-4 mb-6">
            <Link to="/roomdetail">
              <button className="w-full border  py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5"
                />
              </button>
            </Link>
            <Link to="/roomdetail">
              <button className="w-full border  py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img
                  src="https://files.svgcdn.io/streamline-color/meta.svg"
                  className="w-5"
                />
              </button>
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
