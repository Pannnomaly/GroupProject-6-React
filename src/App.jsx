import { Outlet } from "react-router-dom";
import RoomDetail from "./pages/RoomDetail";
import BookingDetail from "./pages/BookingDetail.jsx";
import BookingConfirm from "./pages/BookingConfirm.jsx";

export default function App ()
{
  return (
    <div className="min-h-screen">
      {/* <Outlet /> */}
      <RoomDetail />
      <BookingDetail />
      <BookingConfirm />
    </div>
  );
}