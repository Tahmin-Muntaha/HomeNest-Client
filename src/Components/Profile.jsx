import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Profile = () => {
    const {user,setUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
            navigate('/')
            toast.success('Sign Out Successfully')
        }
        )
        .catch((err)=>{
            toast.error(err.message)

        })
    }
    console.log(user)
    return (
        <div>
            <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1"><img src={user.photoURL} className='h-[50px]'></img> </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>{user.displayName}</a></li>
    <li><a>{user.email}</a></li>
    <li><a><button className='px-4 py-2 border hover:bg-[#FACC15]' type="button" onClick={handleSignOut}>Sign Out</button></a></li>
  </ul>
</div>
        </div>
    );
};

export default Profile;