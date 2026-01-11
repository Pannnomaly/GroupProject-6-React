import { Outlet } from "react-router-dom";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"
// import SidebarApp from "../components/SidebarApp.jsx"

export default function LayoutAdmin ()
{
    return (
        // <div className="min-h-screen">
        //     <SidebarProvider>
        //         <SidebarApp />
        //         <div className="mt-6 ml-6">
        //             <SidebarTrigger />
        //         </div>
        //         <Outlet />
        //     </SidebarProvider>
        // </div>
        <div className="min-h-screen">
            <Outlet />
        </div>
    );
}