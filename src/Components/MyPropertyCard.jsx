import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyPropertyCard = ({property}) => {
    const {user}=useContext(AuthContext)
    const {_id}=property
    const navigate=useNavigate()
    const handleSeeDetails=()=>{
        user?( navigate(`/details/${_id}`)):
        (
        navigate('/signup'),
        toast.error('Plz Sign Up/ Sign In first'))
    }
    const handleDelete=()=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/properties/${_id}`,{
      method:'DELETE',
      header:{
        "Content-Type":"application/json"
      },
     
    }).then(res=>res.json())
    .then(()=>{
        Swal.fire({
      title: "Deleted!",
      text: "Your property has been deleted.",
      icon: "success",
      
    } );
    navigate(`/all`)

    })
    
  }
});
    }
    return (
        <div>
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
            <div>
                <p>__Posted at : {property.postedAt
}</p>
            </div>
            <div className='flex gap-4'>
                <div className='my-2'>
                <button className='px-2 py-4 border rounded-2xl  bg-white text-black hover:bg-[#FACC15]' onClick={handleSeeDetails}>See Details</button>
            </div>
            <div className='my-2'>
                <button className='px-2 py-4 border rounded-2xl  bg-white text-black hover:bg-[#FACC15]' onClick={()=>navigate(`/update/${_id}`)}>Update</button>
            </div>
            <div className='my-2'>
                <button className='px-2 py-4 border rounded-2xl  bg-white text-black hover:bg-[#FACC15]' onClick={()=>handleDelete()}>Delete</button>
            </div>
            </div>
            
        </div> 
        </div>
    );
};

export default MyPropertyCard;