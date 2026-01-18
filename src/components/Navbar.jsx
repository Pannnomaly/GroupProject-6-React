import { Link, useNavigate } from "react-router-dom";

export default function Navbar ({ logout })
{
    const navigate = useNavigate();

    const handleNavigate = () => {
        logout();
        navigate("/");
    };

    return (
            <header className="h-20 bg-(--color-main3) shadow-(--box-shadow)  text-(--color-main11) font-medium font-earn md:h-20 lg:h-20">
                <nav className="h-20 flex items-center justify-between not-visited:text-md md:h-20 md:text-xl md:px-3 lg:h-20 lg:text-xl lg:px-10">
                    <div className="flex items-center pl-10">
                            <Link to="/">
                                <img className="w-23 md:w-30 lg:w-27" src="hotel-logo.png" alt="Hotel Logo" />
                            </Link>
                    </div>
                    <div className="flex items-center gap-x-4 pr-10 h-full">
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/user">
                                <p className="text-center hidden md:flex lg:flex">User</p>
                                <img className="text-center w-7.5 md:hidden lg:hidden" src="user.svg" alt="User Logo" />
                            </Link>
                        </div>
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/roomdetail">
                                <p className="text-center hidden md:flex lg:flex">Availability</p>
                                <img className="text-center w-10 md:hidden lg:hidden" src="room-service.svg" alt="Avalability Logo" />
                            </Link>
                        </div>
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <Link to="/contactus">
                                <p className="text-center hidden md:flex lg:flex">Contact Us</p>
                                <img className="text-center w-6.25 md:hidden lg:hidden" src="contact-us.svg" alt="Contact Logo" />
                            </Link>
                        </div>
                        <div className="h-full px-3 flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
                            <button onClick={handleNavigate}><img src="logout.svg" alt="logout logo" className="w-8 md:opacity-78 cursor-pointer" /></button>
                        </div>
                    </div>
                </nav>
            </header>
    );
}