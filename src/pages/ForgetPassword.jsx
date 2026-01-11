import React from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for navigation

export default function ForgetPassword() {
  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert("Password reset will sent to your email ❗️❗️❗️");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 font-earn">
      <div className="container w-full max-w-xl space-y-8 p-8 border border-gray-200 bg-white shadow-md ">
        <div>
          <img className="mx-auto h-12 w-auto" src="../../public/hotel-logo.png" alt="MonkeyDB Hostel Bangkok" />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              remember your password?
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border px-4 py-2 text-gray-900 focus:right-2 focus:ring-black focus:outline-none"
                placeholder="Email address"
              />
          </div>

          <div>
            <button
              type="submit"
              className="w-full justify-center border px-4 py-2 text-sm font-medium text-white  bg-(--color-main4)  hover:bg-[#e9decf] focus:border-black"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
