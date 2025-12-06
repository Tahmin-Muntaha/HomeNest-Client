import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthProvider from '../Context/AuthProvider';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Navigate } from 'react-router';
import Profile from './Profile';

const NavBar = () => {
    const {user}=useContext(AuthContext)
    const [see,setSee]=useState(false)
    const navigate=useNavigate()
    return (
        <div className='flex justify-between md:items-center shadow-2xl pb-4 px-4 mb-16'>
            <div className='flex gap-2  '>
                <Menu className='block md:hidden' onClick={()=>setSee(!see)}></Menu>
                <h1 className='text-xl font-bold'>🏠 HomeNest</h1>
                {
                    see?
                    <div className='flex flex-col relative top-8 -left-35 z-100 '>
                <NavLink to='/' className=  {({isActive})=>isActive?"text-[#2563EB]":""}>Home</NavLink>
                <NavLink to='/all' className={({isActive})=>isActive?"text-[#2563EB]":""}>All Properties</NavLink>
                {
                    user?
                    <div className='flex flex-col'>
                        <NavLink to='/post' className={({isActive})=>isActive?"text-[#2563EB]":""}>Add Properties</NavLink>
                <NavLink to={`/myproperty/${user.email}`} className={({isActive})=>isActive?"text-[#2563EB]":""}>My Properties</NavLink>
                <NavLink to={`/reviews/${user.email}`}  className={({isActive})=>isActive?"text-[#2563EB]":""}>My Ratings</NavLink>
                        </div>
                        :" "
                }
                
            </div>
                        :" "
                }
            </div>
            <div className='hidden md:block '>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":"" }>Home</NavLink>
                <NavLink to='/all' className={({isActive})=>isActive?"text-[#2563EB]":""}>  All Properties</NavLink>
                {
                    user?
                    <div >
                        <NavLink to='/post' className={({isActive})=>isActive?"text-[#2563EB]":""}>Add Properties</NavLink>
                <NavLink to='/' className={({isActive})=>isActive?"text-[#2563EB]":""}>  My Properties</NavLink>
                <NavLink to={`/reviews/${user.email}`} className={({isActive})=>isActive?"text-[#2563EB]":""}>  My Ratings</NavLink>
                        </div>
                        :" "
                }
                
            </div>
            <div>
                {
                    user?<Profile></Profile>:
                    <button className='px-4 py-2 border rounded-2xl hover:bg-[#FACC15]' 
                onClick={()=>navigate('/signup')}
                >Sign up</button>
                }
            </div>
            
        </div>
    );
};

export default NavBar;