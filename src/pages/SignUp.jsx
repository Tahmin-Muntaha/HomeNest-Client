import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState, useContext } from 'react';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const provider = new GoogleAuthProvider();
    const [see, setSee] = useState(true);
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;

        const exp = /(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!exp.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName, photoURL })
                    .then(() => {
                        setUser(auth.currentUser);
                        navigate('/');
                        toast.success('Sign Up Successful');
                    });
            })
            .catch(err => toast.error(err.message));
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res.user);
                navigate('/');
                toast.success('Sign Up successful with Google');
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8] dark:bg-[#1E293B] p-4">
            <div className="w-full max-w-md bg-white dark:bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">
                
                <div className="h-48 w-full">
                    <img
                        src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=1000&auto=format&fit=crop&q=60"
                        alt="Signup banner"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-8 space-y-5">
                    <h2 className="text-2xl font-bold text-center text-[#3A5A9B] dark:text-white">
                        Create Account
                    </h2>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Name</label>
                            <input
                                name="name"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded dark:bg-[#1E293B] dark:text-white placeholder-gray-400"
                                placeholder="Enter your name"
                                defaultValue="Tahmin Muntaha"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Email</label>
                            <input
                                name="email"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded dark:bg-[#1E293B] dark:text-white placeholder-gray-400"
                                placeholder="Enter your email"
                                defaultValue="tahminmuntaha66@gmail.com"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Photo URL</label>
                            <input
                                name="photo"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded dark:bg-[#1E293B] dark:text-white placeholder-gray-400"
                                placeholder="Enter photo URL"
                                defaultValue="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhHAw_7EMpk4ytQsE5SRSWWLnJrD9YDQdxQ&s"
                            />
                        </div>

                        <div className="flex flex-col relative">
                            <label className="mb-1 text-[#3A5A9B] dark:text-white">Password</label>
                            <input
                                type={see ? 'text' : 'password'}
                                name="password"
                                className="w-full border border-[#3A5A9B] px-3 py-2 rounded pr-10 dark:bg-[#1E293B] dark:text-white placeholder-gray-400"
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

                        <button 
                            className="w-full text-center px-4 py-2 border rounded-xl text-[#3A5A9B] hover:bg-[#3A5A9B] hover:text-white"
                        >
                            Sign Up
                        </button>

                        <div className="flex items-center text-sm text-[#3A5A9B] dark:text-white gap-2">
                            <p>Already have an account?</p>
                            <button
                                type="button"
                                className="px-2 py-2 rounded-xl text-[#4FA3A5] hover:underline"
                                onClick={() => navigate('/login')}
                            >
                                Log In
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

export default SignUp;
