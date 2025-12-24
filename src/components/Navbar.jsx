import { Link } from "react-router-dom";

export default function Navbar ()
{
    return (
            <header className="h-24 bg-(--color-main3) shadow-(--box-shadow) text-(--color-main11) font-medium font-earn">
                <nav className="h-24 flex items-center justify-between no-underline text-2xl px-10">
                    <div className="flex items-center pl-10">
                            <Link to="/">
                                <img className="w-35" src="hotel-logo.png" alt="Hotel Logo" />
                            </Link>
                    </div>
                    <div className="flex items-center gap-x-4 pr-10 h-full">
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/user">
                                <p className="text-center">User</p>
                            </Link>
                        </div>
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/roomdetail">
                                <p className="text-center">Availability</p>
                            </Link>
                        </div>
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/contactus">
                                <p className="text-center">Contact Us</p>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
    );
}