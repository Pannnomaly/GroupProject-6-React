import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserComponent from "@/components/User-component";
import { useOutletContext } from "react-router-dom";

export default function User ()
{
    const { logout, user} = useOutletContext();

    return (
        <div>
            <Navbar logout={logout} user={user} />
            <UserComponent />
            <Footer />
        </div>
    );
}