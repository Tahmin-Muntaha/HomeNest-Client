import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const SeeDetails = () => {
    const {id}=useParams()
    const [property,setProperty]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/properties/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProperty(data)
            setLoading(false)
        })
    },[])
    if(loading) return <div>loading..</div>
    console.log(property)
    return (
        <div className='flex gap-4'>
            <div>
                <img src={property.imageLink} className=' md:h-[400px]'></img>
            </div>
            <div className='text-xl'>
                <p className='text-2xl font-bold'>{property.propertyName}</p>
                <p>__Category : {property.category}</p>
                <p>__Price : {property.price}</p>
                <p>__Location : {property.location}</p>
                <p>__Posted by : {property.userName}</p>
                <p>__Description : {property.description}</p>
                <form>
                    <div>
                        <label>__Rating : </label>
                        <br></br>
                        <input type="text" placeholder='Rate this property(1 to 5)' className='border pl-2 pr-8 py-2' ></input>
                    </div>
                     <div>
                        <label>__Review : </label>
                        <br></br>
                        <input type="text" placeholder='Review this property' className='border pl-2 pr-8 py-2' ></input>
                    </div>
                    <button type="button" className='px-4 py-2 hover:bg-[#FACC15] my-2 rounded-2xl border' >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SeeDetails;


// Shows full property information:

// . Property Name
// · Description
// · Price
// . Location
// · Category
// · Property image
// Posted date
// . Posted by (Name, Email, or profile photo)