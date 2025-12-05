import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router';
import AuthProvider from '../Context/AuthProvider';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const NavBar = () => {
    const {user}=useContext(AuthContext)
    const [see,setSee]=useState(false)
    return (
        <div className='flex justify-between md:items-center shadow-2xl pb-4 px-4 mb-16'>
            <div className='flex gap-2 text-xl '>
                <Menu className='block md:hidden' onClick={()=>setSee(!see)}></Menu>
                <h1>🏠 HomeNest</h1>
                {
                    see?
                    <div className='flex flex-col relative top-8 -left-35 z-100 '>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>Home</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>All Properties</NavLink>
                {
                    user?
                    <div className='flex flex-col'>
                        <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>Add Properties</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>My Properties</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>My Ratings</NavLink>
                        </div>
                        :" "
                }
                
            </div>
                        :" "
                }
            </div>
            <div className='hidden md:block '>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":"" }>Home</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>  All Properties</NavLink>
                {
                    user?
                    <div >
                        <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>Add Properties</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>  My Properties</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>  My Ratings</NavLink>
                        </div>
                        :" "
                }
                
            </div>
            <div>
                <button className='px-4 py-2 border rounded-2xl hover:bg-[#FACC15]'>Sign up</button>
            </div>
            
        </div>
    );
};

export default NavBar;