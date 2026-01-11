import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"
import SidebarApp from "../components/SidebarApp.jsx"


export default function AsideAdmin ()
{
    return (
        <div className="min-h-screen">
            <SidebarProvider>
                <SidebarApp />
                <div className="mt-6 ml-6">
                    <SidebarTrigger />
                </div>
            </SidebarProvider>
        </div>
    );
}