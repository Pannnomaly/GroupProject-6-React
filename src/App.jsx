import { Outlet } from "react-router-dom";
import RoomDetail from "./pages/RoomDetail";

export default function App ()
{
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}