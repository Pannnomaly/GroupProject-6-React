import { Button } from "@/components/ui/button";
import React from "react";

const Registration = () => {
  return (
    <>
      <main className="bg-white min-h-screen flex flex-col justify-center items-center py-10">
        <a href="./index.html">
          <h1 className="text-3xl font-serif text-[#8c7761] mb-10">MonkeyDB Hostels</h1>
        </a>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* <!-- Left Section --> */}
          <div>
            <img src="./images/room-01.jpg" className="rounded-xl shadow w-full mb-6" />

            <h2 className="text-2xl font-semibold mb-2">good places for your vacation.</h2>

            <div className="bg-[#d9cbbb] rounded-xl p-6 w-auto mt-7">
              <h3 className="font-semibold mb-1">Basic dialog title</h3>
              <p className="text-sm text-gray-700 mb-4">
                A dialog is a type of modal window that appears in front of app content to provide
                critical information, or prompt for a decision to be made.
              </p>
              <div className="flex justify-end space-x-4 text-sm font-medium">
                <Button className="hover:underline">Action 2</Button>
                <Button className="hover:underline">Action 1</Button>
              </div>
            </div>
          </div>

          {/* <!-- Right Section --> */}
          <div className="flex flex-col justify-start max-w-full">
            <h2 className="text-2xl font-semibold mb-4">Sign up</h2>

            {/* <!-- Google Button --> */}
            <a href="./room-detail.html">
              <Button className="w-full bg-gray-700 text-white py-3 rounded-lg flex justify-center items-center gap-3 mb-4 hover:bg-gray-800 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
                <p>Continue with Google</p>
              </Button>
            </a>

            {/* <!-- Facebook Button --> */}
            <a href="./room-detail.html">
              <Button className="w-full bg-blue-400 text-white py-3 rounded-lg flex justify-center items-center gap-3 mb-6 hover:bg-blue-700 transition">
                <img src="https://files.svgcdn.io/streamline-color/meta.svg" className="w-7" />
                <p>Continue with Facebook</p>
              </Button>
            </a>

            {/* Form */}
            <div className="border rounded-xl p-6">
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="email@email.com"
                className="w-full border px-3 py-2 rounded-lg mt-1 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
              />

              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="12345"
                className="w-full border px-3 py-2 rounded-lg mt-1 mb-6 focus:ring-2 focus:ring-black focus:outline-none"
              />

              <a href="./room-detail.html">
                <Button className="w-full bg-[#d9cbbb] text-gray-700 py-3 rounded-lg mb-4 hover:bg-[#e2dad1]">
                  Create Your Accout
                </Button>
              </a>

              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;