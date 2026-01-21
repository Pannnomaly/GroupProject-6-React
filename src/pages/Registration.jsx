import axios from "axios";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Registration = () => {
  const { API } = useOutletContext();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/users`, formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <main className="bg-white min-h-screen flex flex-col justify-center items-center font-earn px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="md:flex hidden flex-wrap absolute top-20 z-50 left-1/2 -translate-x-1/2 gap-10 text-shadow-lg">
            <Link to="/">
              <h1 className="text-6xl text-(--color-main11) md:hidden lg:flex">
                MonkeyDB
              </h1>
            </Link>
            <Link to="/">
              <h1 className="text-6xl text-(--color-main3) md:hidden lg:flex">
                Hotel Bangkok
              </h1>
            </Link>
          </div>
          {/* <!-- Left Section --> */}
          <div className="hidden md:flex w-full h-full object-cover">
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600224/christina-radevich-kQjEq2bNFS0-unsplash_qsmfqh.jpg"
              className="shadow w-full object-cover"
            />
          </div>

          {/* <!-- Right Section --> */}
          <div className="flex flex-col justify-center w-full max-w-md mx-auto">
            <div className="flex justify-center mt-10 text-shadow-lg">
              <Link to="/">
                <h1 className="text-4xl text-(--color-main11) hidden md:flex lg:hidden">
                  MonkeyDB
                </h1>
              </Link>
              <Link to="/">
                <h1 className="text-4xl text-(--color-main3) hidden md:flex lg:hidden">
                  Hotel Bangkok
                </h1>
              </Link>
              <Link to="/">
                <h1 className="text-4xl text-(--color-main11) md:hidden lg:hidden">
                  MonkeyDB
                </h1>
              </Link>
              <Link to="/">
                <h1 className="text-4xl text-(--color-main3) md:hidden lg:hidden">
                  Hotel Bangkok
                </h1>
              </Link>
            </div>
            <h2 className="text-2xl md:text-3xl text-center font-medium mt-5 mb-10">
              Sign up
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstname" className="text-lg">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.firstname}
                onChange={handleChange}
              />

              <label htmlFor="lastname" className="text-lg">
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.lastname}
                onChange={handleChange}
              />

              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full border px-3 py-2 mt-1 mb-6 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full text-lg bg-(--color-main10) text-(--color-main11) py-3  mb-4 hover:bg-(--color-main5)"
              >
                Create Your Accout
              </button>

              <Link
                to="/forgetpassword"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot password?
              </Link>
            </form>

            <div className="flex items-center my-10">
              <div className="grow border-t border-(--color-main10)"></div>

              <span className="mx-4 text-2xl text-center text-(--color-main6)">
                or
              </span>

              <div className="grow border-t border-(--color-main10)"></div>
            </div>

            <div className="flex flex-col items-center">
              {/* <!-- Google Button --> */}
              <Link to="/roomdetail" className="w-[80%]">
                <button className="w-full bg-(--color-main2) text-white py-3 flex justify-center mb-4 gap-5 hover:bg-(--color-main5) transition">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5"
                  />
                  <p className="text-lg">Continue with Google</p>
                </button>
              </Link>

              {/* <!-- Facebook Button --> */}
              <Link to="/roomdetail" className="w-[80%]">
                <button className="w-full bg-(--color-main2) text-white py-3 flex justify-center items-center mb-4 gap-5 hover:bg-(--color-main5) transition">
                  <img
                    src="https://files.svgcdn.io/streamline-color/meta.svg"
                    className="w-7"
                  />
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
