import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState, useContext } from 'react';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const LogIn = () => {
    const [see, setSee] = useState(true);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const { setUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                navigate('/');
                toast.success('Log  In successful');
            })
            .catch(err => toast.error(err.message));
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user);
                navigate('/');
                toast.success('Log In successful with Google');
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8] p-4 dark:bg-[#1E293B]">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden dark:bg-[#111827]">
                
                <div className="h-48 w-full">
                    <img
                        src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=1000&auto=format&fit=crop&q=60"
                        alt="Login banner"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-8 space-y-5">
                    <h2 className="text-2xl font-bold text-center text-[#3A5A9B] dark:text-white">
                        Log In
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Email</label>
                            <input
                                name="email"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded placeholder-gray-400 dark:bg-[#1E293B] dark:text-white"
                                defaultValue="tahminmuntaha66@gmail.com"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col relative">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Password</label>
                            <input
                                type={see ? 'text' : 'password'}
                                name="password"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded pr-10 placeholder-gray-400 dark:bg-[#1E293B] dark:text-white"
                                placeholder="Enter your password"
                                defaultValue="1234Qw"
                            />
                            <div
                                className="absolute right-3 top-9 cursor-pointer text-[#4FA3A5]"
                                onClick={() => setSee(!see)}
                            >
                                {see ? <Eye size={18} /> : <EyeClosed size={18} />}
                            </div>
                        </div>
                        <p className='text-sm dark:text-white'>Want to see Private Routes?Use default credentials.</p>
                        <p className='text-sm dark:text-white'></p>
                        <button 
                            className="w-full text-center px-4 py-2 border rounded-xl text-[#3A5A9B] hover:bg-[#3A5A9B] hover:text-white dark:text-[#4FA3A5] dark:hover:bg-[#4FA3A5] dark:hover:text-white"
                        >
                            Log In
                        </button>

                        <div className="flex items-center text-sm gap-2">
                            <p className="text-[#3A5A9B] dark:text-white">New to our website?</p>
                            <button
                                type="button"
                                className="px-2 py-2 rounded-xl text-[#4FA3A5] hover:underline"
                                onClick={() => navigate('/signup')}
                            >
                                Sign Up
                            </button>
                        </div>

                        <button
                            type="button"
                            className="text-[#4FA3A5] hover:underline"
                            onClick={handleGoogleSignIn}
                        >
                            Continue with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
