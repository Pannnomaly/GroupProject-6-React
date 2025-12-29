import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserComponent from "@/components/User-component";

export default function User ()
{
    console.log("User here");
    return (
        <div>
            <Navbar />
            <UserComponent />
            <Footer />
        </div>
    );
}