import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { Home, MenuIcon } from 'lucide-react';
import Profile from './Profile';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-900 border-b shadow-sm sticky top-0 mb-20">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 max-w-7xl mx-auto">

        <h1 className="flex items-center gap-1 text-xl font-bold text-[#3A5A9B]" onClick={()=>{navigate('/')}}>
          <Home /> 
           Home<span className="text-[#4FA3A5]">Nest</span>
        </h1>

        <div className="flex items-center gap-3">

          <div className="dropdown dropdown-end z-100">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-full px-4 flex gap-2 text-[#3A5A9B] dark:text-white hover:bg-[#E6F4F4] dark : hover:text-black"
            >
              <MenuIcon />
              Menu
            </div>

            <ul className="dropdown-content menu bg-white dark:bg-slate-800 rounded-2xl w-56 p-3 shadow-lg">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                Home
              </NavLink>

              <NavLink to="/all" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                All Properties
              </NavLink>

              {user && (
                <NavLink to="/dash" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                    DashBoard
                  </NavLink>
                // <>
                //   <NavLink to="/post" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                //     Add Properties
                //   </NavLink>

                //   <NavLink to={`/myproperty/${user.email}`} className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                //     My Properties
                //   </NavLink>

                //   <NavLink to={`/reviews/${user.email}`} className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                //     My Ratings
                //   </NavLink>
                // </>
              )}

              <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                About Us
              </NavLink>
              <NavLink to="/term" className={({ isActive }) => isActive ? "text-[#4FA3A5] font-semibold" : "hover:text-[#4FA3A5]"}>
                Term and Conditions
              </NavLink>
            </ul>
          </div>

          {user ? (
            <Profile />
          ) : (
            <>
              <button
                className="px-4 py-2 border rounded-xl text-[#3A5A9B] hover:bg-[#3A5A9B] hover:text-white"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
              <button
                className="px-4 py-2 border rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white"
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default NavBar;
