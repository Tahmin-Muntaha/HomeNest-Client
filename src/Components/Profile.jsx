import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const html = document.querySelector('html');
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                navigate('/');
                toast.success('Sign Out Successfully');
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <div>
            <div className="dropdown dropdown-end z-100">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost rounded-full p-1 hover:bg-gray-100 dark:hover:bg-[#111827] transition-colors"
                >
                    <img
                        src={user.photoURL}
                        className="h-10 w-10 rounded-full border-2 border-teal-400 object-cover"
                    />
                </div>

                <ul className="dropdown-content menu bg-white dark:bg-[#1E293B] 
                    dark:text-[#93C5FD] rounded-2xl w-60 p-4 shadow-xl space-y-3">

                    <li className="text-center">
                        <p className="font-semibold text-[#2563EB] dark:text-[#93C5FD]">
                            {user.displayName}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            {user.email}
                        </p>
                    </li>

                    <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>

                    <li className="flex items-center justify-between px-2">
                        <span className="text-sm text-gray-700 dark:text-gray-200">Dark Mode</span>
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle toggle-sm toggle-primary"
                        />
                    </li>

                    <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>

                    <li>
                        
                        <button
                className="px-4 py-2 border rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
