import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { LayoutDashboard, PlusSquare, Home, Star } from "lucide-react";

const DashBoard = () => {
  const { user } = useContext(AuthContext);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium
     ${
       isActive
         ? "bg-[#4FA3A5] text-white"
         : "text-[#3A5A9B] dark:text-gray-300 hover:bg-[#4FA3A5]/20"
     }`;

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-black">
      
      <aside className="w-64 p-5 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-[#3A5A9B] mb-8">
          Dashboard
        </h2>

        <nav className="space-y-2">
          <NavLink to="/dash" end className={linkStyle}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          

          <NavLink
            to={`/dash/myproperty/${user.email}`}
            className={linkStyle}
          >
            <Home size={18} />
            My Properties
          </NavLink>

          <NavLink
            to={`/dash/reviews/${user.email}`}
            className={linkStyle}
          >
            <Star size={18} />
            My Ratings
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
