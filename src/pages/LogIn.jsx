import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const LogIn = () => {
    
    const navigate=useNavigate()
    const [see,setSee]=useState(true)
    const provider=new GoogleAuthProvider()
    const handleSignUp=(e)=>

    {
        e.preventDefault()
        const email=e.target.email?.value
        const password=e.target.password?.value
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            console.log(res)
            navigate('/')
            toast.success('Sign In successful')
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
    }
    const handleGoogleSignIn=()=>{
            signInWithPopup(auth,provider)
            .then(()=>{
                
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
                <img src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww" className='h-[530px] '></img>
            </div>
        <div className=' p-10 '>
           <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>Sign In</p>
           <form onSubmit={handleSignUp}>
            
            <div>
                <label className='text-xl text-[#050505] mb-2'>__Email</label>
                <br></br>
                <input type="text" name="email" placeholder="enter your email" className='border  pl-2 pr-36 py-2'></input>
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
                <button className='px-4 py-2 border rounded hover:bg-[#FACC15] mt-20'>Sign In</button>
            </div>
          <div className='flex items-center gap-5'>
              <div className='flex items-center gap-2'>
                <p>New in<br></br>our website?</p>
                
                <button className='px-4 py-2 border rounded hover:bg-[#FACC15]' type="button" onClick={()=>navigate('/signup')}>Sign Up</button>
            </div>
            <div><button className='px-4 py-2 border rounded hover:bg-[#FACC15]' type="button" onClick={handleGoogleSignIn}>Log In with Google</button></div>
          </div>
           </form>
        </div>
        </div>
    );
};

export default LogIn;