import { Button } from "@/components/ui/button";
import React from "react";

const Login = () => {
  return (
    <>
      <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">SIGN IN</h1>
        <div className="container w-full max-w-2xl bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <div className="flex justify-end">
            <a href="./registration.html">
              <Button className="text-xl text-end font-semibold mb-1">Create an account</Button>
            </a>
          </div>
          <p className="text-gray-500 text-sm mb-6">Enter your email below to create your account</p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="grow h-px bg-gray-300"></span>
            <span className="text-gray-500 text-sm">Or continue with</span>
            <span className="grow h-px bg-gray-300"></span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <a href="./room-detail.html">
              <Button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
              </Button>
            </a>
            <a href="./room-detail.html">
              <Button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="https://files.svgcdn.io/streamline-color/meta.svg" className="w-5" />
              </Button>
            </a>
          </div>

          <a href="./room-detail.html">
            <Button className="w-full bg-[#DACDB9] text-gray-700 font-semibold py-3 rounded-lg hover:bg-[#e9decf] transition">
              Log in
            </Button>
          </a>
        </div>
      </main>
    </>
  );
};

export default Login;