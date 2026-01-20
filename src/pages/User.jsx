import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserComponent from "@/components/User-component";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function User ()
{
    const { logout, user} = useContext(AuthContext);

    return (
        <div>
            <Navbar logout={logout} user={user} />
            <UserComponent />
            <Footer />
        </div>
    );
}