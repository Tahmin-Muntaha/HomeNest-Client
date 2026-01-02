import { DollarSign, DollarSignIcon, MapPinned, MapPinnedIcon, Notebook, Star } from 'lucide-react';
import React from 'react';

const RatingCard = ({rating}) => {
    
    return (
       
  <div className=" rounded-2xl shadow-xl bg-white dark:bg-gray-900  overflow-x-auto ">
    <table className="min-w-[900px] w-full">
            <thead className="bg-[#3A5A9B] text-white">
        <tr>
          <th className="px-6 py-4 text-left font-semibold">Image</th>
          <th className="px-6 py-4 text-left font-semibold">Property</th>
          
          <th className="px-6 py-4 text-left font-semibold">Rating</th>
          <th className="px-6 py-4 text-left font-semibold">Review</th>
        </tr>
      </thead>

            <tbody className=" ">
       {
        rating.map(r=>
             <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <td className="px-6 py-4">
            <img
              src={r.image}
              alt={r.propertyName}
              className="h-20 w-28 object-cover rounded-xl"
            />
          </td>

          <td className="px-6 py-4 font-semibold text-[#3A5A9B] dark:text-white">
            {r.propertyName}
          </td>

          
         
             <td className="px-6 py-4 flex items-center gap-2 my-6">
            <Star size={16} className="text-[#4FA3A5]" />
            <span className="font-semibold dark:text-white">
              {r.rating}
            </span>
          </td>
         

          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            {r.review}
          </td>
        </tr>
        )
       }
      </tbody>
          </table>
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