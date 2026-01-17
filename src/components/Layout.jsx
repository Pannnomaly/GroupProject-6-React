import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function Layout() {

  const { API, user, login, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen">
      <Outlet context={{ API, user, login, logout }} />
    </div>
  );
}
