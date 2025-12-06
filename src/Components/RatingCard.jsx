import React from 'react';

const RatingCard = ({r}) => {
    
    return (
       <div className='shadow-2xl p-8  rounded-2xl bg-[#0d1a45] text-white'>
            <div className='flex items-center '>
                <img src={r.imgae} className='h-[300px] w-full'></img>
            </div>
            <div className='flex justify-between items-center py-2'>
                <p className='font-bold'>{r.propertyName}</p>
                <p className='bg-white text-black p-1 rounded-2xl'>{r.user_name

}</p>
            </div>
            <div>
                <p>__Rating : {r.rating}</p>
                <p>__Review : {r.review
}</p>
            </div>
            <div>
                <p>__Posted at : {r.postedAt
}</p>
            </div>
            
        </div>
    );
};

export default RatingCard;



// My Ratings Page: (Private Route)

// A page that displays user ratings and feedback for properties.

// Each rating card should show:

// . Reviewer Name
// . Property Name (the property being reviewed)
// · Star Rating (1 to 5)
// . Short Review Text
// . Review Date
// . Thumbnail of Property

// 5Other Requiremente (It chould alco ha imnlemented)