import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Property from './Property';

const All = () => {
    const [proerties,setProperties]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/properties')
        .then(res=>res.json())
        .then(data=>{
            setProperties(data)
            setLoading(false)
        })
    },[])
    console.log(proerties)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
           {
            proerties.map(property=><Property key={property._id} property={property}></Property>)
           }
        </div>
    );
};

export default All;