import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Property = ({property}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSeeDetails=()=>{
        user?( navigate('/details')):
        (
        navigate('/signup'),
        toast.error('Plz Sign Up/ Sign In first'))
    }
    console.log(property)
    return (
        <div className='shadow-2xl p-8  rounded-2xl bg-[#0d1a45] text-white'>
            <div className='flex items-center '>
                <img src={property.imageLink} className='h-[300px] w-full'></img>
            </div>
            <div className='flex justify-between items-center py-2'>
                <p className='font-bold'>{property.propertyName}</p>
                <p className='bg-white text-black p-1 rounded-2xl'>{property.category}</p>
            </div>
            <div>
                <p>__Price : {property.price}</p>
                <p>__Location : {property.location}</p>
            </div>
            <div>
                <p>__Posted by : {property.userName}</p>
            </div>
            <div className='my-2'>
                <button className='px-2 py-4 border rounded-2xl  bg-white text-black hover:bg-[#FACC15]' onClick={handleSeeDetails}>See Details</button>
            </div>
        </div>
    );
};

export default Property;



//  Property Name 
// ● Category 
// ● Price 
// ● Location 
// ● Thumbnail Image 
// ● Posted by (User Name) 
// ● See Details button