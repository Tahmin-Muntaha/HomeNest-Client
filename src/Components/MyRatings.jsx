import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import RatingCard from './RatingCard';

const MyRatings = () => {
    const {user}=useContext(AuthContext)
    const [rating,setRating]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/my-reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRating(data)
            setLoading(false)

        })
        
    },[])
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {
                rating.map(r=><RatingCard r={r}></RatingCard>)
            }
        </div>
    );
};

export default MyRatings;