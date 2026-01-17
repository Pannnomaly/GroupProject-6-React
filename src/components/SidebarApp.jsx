import { LayoutDashboard, Bed, NotebookPen, User } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext.jsx"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "../admindashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Room Management",
    url: "../adminroomlists",
    icon: Bed,
  },
]

export default function SideBar() {

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNavigate = () => {
        logout();
        navigate("/");
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <img className="size-fit" src="hotel-logo.png" alt="" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link to="../admin">
                                <User />
                                <span>Joe Dorn</span>
                            </Link>
                        </SidebarMenuButton>
                            <SidebarMenuButton asChild>
                                <Button onClick={handleNavigate} variant="destructive" className="my-5 transition duration-300 ease-in-out cursor-pointer">Log out</Button>
                            </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}