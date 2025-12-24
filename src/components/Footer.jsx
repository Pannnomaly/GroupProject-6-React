import { Link } from "react-router-dom";

export default function Footer() {
  return (
        <footer className="h-76 flex flex-col items-center justify-between bg-(--color-main3) text-(--color-main11) shadow-(--box-shadow) font-medium font-earn">
            <div className="flex items-start justify-around pt-5 w-11/12 h-full text-lg">
                <div className="my-auto">
                    <div>
                        <Link to="/">
                                <img className="w-50" src="hotel-logo.png" alt="Hotel Logo" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-2xl">SITE MAP</p>
                    </div>
                    <div className="pt-3 gap-5 flex flex-col">
                        <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                            <Link to="/user">
                                <p className="text-xl">User</p>
                            </Link>
                        </div>
                        <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                            <Link to="/roomdetail">
                                <p className="text-xl">Availability</p>
                            </Link>
                        </div>
                        <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                            <Link to="/contactus">
                                <p className="text-xl">Contact Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-2xl">SOCIALS</p>
                    </div>
                <div className="pt-3 gap-5 flex flex-col">
                    <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                        <Link to="/">
                            <p className="text-xl">Facebook</p>
                        </Link>
                    </div>
                    <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                        <Link to="/">
                            <p className="text-xl">Instagram</p>
                        </Link>
                    </div>
                    <div className="hover:bg-(--color-main2) rounded-lg transition duration-300 ease-in-out">
                        <Link to="/">
                            <p className="text-xl">Twitter</p>
                        </Link>
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col w-3/4">
                        <p className="font-bold text-2xl">HEAD OFFICE</p>
                        <div className="pt-3 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        possimus?
                        </div>
                    </div>
                    <div className="flex flex-col pb-5">
                        <div className="text-2xl font-bold pb-1">NEWSLETTER</div>
                        <div className="w-3/4 bg-(--color-main11) mt-3 shadow-(--box-shadow) text-gray-500">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter your email address"
                                className="w-full text-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-4 pt-2 px-10 w-11/12 text-xl gap-3">
                <div>contact@gmail.com</div>
                <div>||</div>
                <div>084-444-4444</div>
                <div>||</div>
                <div>© MonkeyDB Hostel All rights reserved</div>
            </div>
        </footer>
  );
}