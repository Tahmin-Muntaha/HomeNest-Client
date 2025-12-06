import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
import Property from './Property';
import MyPropertyCard from './MyPropertyCard';

const MyProperty = () => {
    const {user}=useContext(AuthContext)
    const [my,setMy]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/my-properties?email=${user.email}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setMy(data)
            setLoading(false)

        })
        
        
    },[])
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            {
                my.map(property=><MyPropertyCard property={property}></MyPropertyCard>)
                
            }
        </div>
        </div>
    );
};

export default MyProperty;