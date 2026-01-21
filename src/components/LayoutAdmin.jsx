import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"
import SidebarApp from "../components/SidebarApp.jsx"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function LayoutAdmin ()
{
    const { logout, API } = useContext(AuthContext);

    return (
        <div className="min-h-screen">
            <SidebarProvider>
                <SidebarApp />
                    <SidebarTrigger />
                <Outlet context={{ API, logout }} />
            </SidebarProvider>
        </div>
    );
}