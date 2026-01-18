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
      <main className="bg-white min-h-screen flex flex-col justify-center items-center font-earn">
        {/* Hotel Name - Mobile (over image) */}
<div className="md:hidden absolute top-4 left-0 right-0 z-50 px-4">
  <div className="text-center space-y-1">
    <div className="text-3xl bg-(--color-main10)/65 text-(--color-main11) px-4 py-2 rounded-lg inline-block">
      <div>MonkeyDB</div>
      <div>Hotel Bangkok</div>
    </div>
  </div>
</div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Section - Image */}
        <div className="relative">
          <div className="h-64 md:h-full">
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600224/christina-radevich-kQjEq2bNFS0-unsplash_qsmfqh.jpg"
              className="w-full h-full object-cover"
              alt="Hotel lobby"
            />
          </div>
 
          {/* Hotel Name - Desktop */}
          <div className="hidden md:flex absolute top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl text-center mx-auto">
              <span className="text-(--color-main11)">MonkeyDB</span>{' '}
              <span className="text-(--color-main11)">Hotel Bangkok</span>
            </h1>
          </div>
        </div>

          {/* <!-- Right Section --> */}
          <div className="flex flex-col justify-center w-full max-w-md mx-auto">
            <h2 className="text-4xl text-center font-medium mb-10">Sign up</h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstname" className="text-lg">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.firstname}
                onChange={handleChange}
              />

              <label htmlFor="lastname" className="text-lg">Last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.lastname}
                onChange={handleChange}
              />

              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="w-full border px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="password" className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="12345"
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

              <Link to="/forgetpassword" className="text-sm text-gray-600 hover:underline">
                Forgot password?
              </Link>
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
