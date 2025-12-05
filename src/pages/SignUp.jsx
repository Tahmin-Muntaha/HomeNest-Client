import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const provider=new GoogleAuthProvider()
    const [see,setSee]=useState(true)
    const navigate=useNavigate()
    const {user,setUser}=useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email?.value
        const password=e.target.password?.value
        const displayName=e.target.name?.value
        const photoURL=e.target.photo?.value
        const exp=/(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        if(!exp.test(password)){
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
            return
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            updateProfile(auth.currentUser,{
                displayName:displayName,
                photoURL:photoURL
            })
            .then(()=>{
                
              setUser(auth.currentUser)
             navigate('/')
            toast.success('Sign Up Successful')

            })
            .catch(err=>{
                console.log(err)
                toast.error(err.message)}
            )}
        )
        .catch(err=>{
            console.log(err)
            toast.error(err.message)}
        )
    }
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(res=>{
            setUser(res.user)
            navigate('/')
            toast.success('Sign Up succesful with google')
        }

        ).catch(err=>{
            console.log(err)
            toast.error(err.message)}
        )

    }
    
    return (
        <div className='flex gap-0 items-center shadow-2xl max-w-[800px] mx-auto'>
            <div>
                <img src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" className='h-[530px] '></img>
            </div>
        <div className=' p-10 '>
           <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>Sign Up</p>
           <form onSubmit={handleSignUp}>
            <div>
                <label className='text-xl text-[#050505] mb-2'>__Name</label>
                <br></br>
                <input type="text" name="name" placeholder="enter your name" className='border  pl-2 pr-36 py-2'></input>
            </div>
            <div>
                <label className='text-xl text-[#050505] mb-2'>__Email</label>
                <br></br>
                <input type="text" name="email" placeholder="enter your email" className='border  pl-2 pr-36 py-2'></input>
            </div>
              <div>
                <label className='text-xl text-[#050505] mb-2'>__photoURL</label>
                <br></br>
                <input type="text" name="photo" placeholder="enter your email" className='border  pl-2 pr-36 py-2'></input>
            </div>
            <div className='absolute'>
                <label className='text-xl text-[#050505] mb-2'>__Password</label>
                <br></br>
                <input type={see?"text":"password"} name="password" placeholder="enter your password" className='border  pl-2 pr-36 py-2'></input>
                <div className='relative -top-8 left-74' onClick={()=>setSee(!see)}>{
                    see?<Eye></Eye>:<EyeClosed></EyeClosed>
                    }</div>
            </div>
            <div className='my-3 flex justify-center'>
                <button className='px-4 py-2 border rounded hover:bg-[#FACC15] mt-20'>Sign Up</button>
            </div>
          <div className='flex items-center gap-5'>
              <div className='flex items-center gap-2'>
                <p>Already have<br></br>an account?</p>
                
                <button className='px-4 py-2 border rounded hover:bg-[#FACC15]' type="button" onClick={()=>navigate('/login')}>Log In</button>
            </div>
            <div><button className='px-4 py-2 border rounded hover:bg-[#FACC15]' type="button" onClick={handleGoogleSignIn}>Log In with Google</button></div>
          </div>
           </form>
        </div>
        </div>
        
    );
};

export default SignUp;