import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <main className="bg-white min-h-screen flex flex-col justify-center items-center font-earn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="md:flex hidden flex-wrap absolute top-20 z-50 left-1/2 -translate-x-1/2 gap-10">
            <h1 className="text-6xl text-(--color-main11) text-start">
              MonkeyDB
            </h1>
            <h1 className="text-6xl text-(--color-main3) text-end">
              Hotel Bangkok
            </h1>
          </div>
          {/* <!-- Left Section --> */}
          <div className="hidden md:block">
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600224/christina-radevich-kQjEq2bNFS0-unsplash_qsmfqh.jpg"
              className="shadow w-full object-cover"
            />

          </div>

          {/* <!-- Right Section --> */}
          <div className="flex flex-col justify-center w-full max-w-md mx-auto">
            <h2 className="text-4xl text-center font-medium mb-10">Sign up</h2>

            {/* Form */}
            <form>
              <label className="text-lg">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
              />

              <label className="text-lg">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
              />

              <label className="text-lg">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
              />

              <label className="text-lg">Password</label>
              <input
                type="password"
                placeholder="12345"
                className="w-full border px-3 py-2 mt-1 mb-6 focus:ring-2 focus:ring-black focus:outline-none"
              />
              <Link to="/roomdetail">
                <button className="w-full text-lg bg-(--color-main10) text-(--color-main11) py-3  mb-4 hover:bg-(--color-main5)">
                  Create Your Accout
                </button>
              </Link>

              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot password?
              </a>
            </form>

            <div className="flex items-center my-10">
              <div className="grow border-t border-(--color-main10)"></div>

              <span className="mx-4 text-2xl text-center text-(--color-main6)">or</span>

              <div className="grow border-t border-(--color-main10)"></div>
            </div>

            <div className="flex flex-col items-center">
              {/* <!-- Google Button --> */}
              <Link to="/roomdetail" className="w-[80%]">
                <button className="w-full bg-(--color-main2) text-white py-3 flex justify-center mb-4 gap-5 hover:bg-(--color-main5) transition">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
                  <p className="text-lg">Continue with Google</p>
                </button>
              </Link>

              {/* <!-- Facebook Button --> */}
              <Link to="/roomdetail" className="w-[80%]">
                <button className="w-full bg-(--color-main2) text-white py-3 flex justify-center items-center mb-4 gap-5 hover:bg-(--color-main5) transition">
                  <img src="https://files.svgcdn.io/streamline-color/meta.svg" className="w-7" />
                  <p className="text-lg">Continue with Facebook</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;
