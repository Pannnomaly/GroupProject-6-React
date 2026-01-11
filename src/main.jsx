import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Error from './pages/Error.jsx';
import Layout from './components/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import RoomDetail from './pages/RoomDetail.jsx';
import BookingDetail from './pages/BookingDetail.jsx';
import BookingConfirm from './pages/BookingConfirm.jsx';
import User from './pages/User.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AdminDashboard from './pages/AdminDashboard';
import Admin from './pages/Admin';
import Explore from './pages/ExploreDetail';
import LayoutAdmin from './components/LayoutAdmin';
import ForgetPassword from './pages/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Registration /> },
          { path: "roomdetail", element: <RoomDetail /> },
          { path: "bookingdetail", element: <BookingDetail /> },
          { path: "bookingconfirm", element: <BookingConfirm /> },
          { path: "user", element: <User /> },
          { path: "contactus", element: <ContactUs /> },
          { path: "explore", element: <Explore/> },
          { path: "forgetpassword", element: <ForgetPassword/> },
        ],
      },
      {
        element: <LayoutAdmin />,
        children: [
          { path: "admindashboard", element: <AdminDashboard /> },
          { path: "admin", element: <Admin/> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);