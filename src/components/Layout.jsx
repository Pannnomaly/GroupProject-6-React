import { Outlet } from "react-router-dom";

export default function Layout ()
{
    const API = import.meta.env.VITE_API_URL;
    return (
        <div className="min-h-screen">
            <Outlet context= {{ API }}/>
        </div>
    );
}