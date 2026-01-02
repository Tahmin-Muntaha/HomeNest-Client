import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyPropertyCard = ({ my }) => {
  
  
  const navigate = useNavigate();
  const handleSeeDetails = (_id) => {
     navigate(`/details/${_id}`)
      
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://homenest-eight.vercel.app/properties/${_id}`, {
          method: "DELETE",
          header: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your property has been deleted.",
              icon: "success",
            });
            navigate(`/all`);
          });
      }
    });
  };
  return (
    <div>
      
      <div className=" rounded-2xl shadow-xl bg-white dark:bg-gray-900  overflow-x-auto ">
    <table className="min-w-[900px] w-full">
            <thead className="bg-[#3A5A9B] text-white">
        <tr>
          <th className="px-6 py-4 text-left font-semibold">Image</th>
          <th className="px-6 py-4 text-left font-semibold">Property</th>
          
          <th className="px-6 py-4 text-left font-semibold">Category</th>
          <th className="px-6 py-4 text-left font-semibold">Price</th>
          <th className="px-6 py-4 text-left font-semibold">Location</th>
          
          <th className="px-6 py-4 text-left font-semibold">Posted At</th>
          <th className="px-6 py-4 text-left font-semibold">Details</th>
          <th className="px-6 py-4 text-left font-semibold">Update</th>
          <th className="px-6 py-4 text-left font-semibold">Delete</th>
        </tr>
      </thead>

            <tbody className=" ">
              {
                my.map(property=>
                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <td className="px-6 py-4">
            <img
              src={property.imageLink}
              alt={property.propertyName}
              className="h-20 w-28 object-cover rounded-xl"
            />
          </td>

          <td className="px-6 py-4 font-semibold text-[#3A5A9B] dark:text-white">
            {property.propertyName}
          </td>

          
         <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
           {property.category}
          </td>
            
         

          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            {property.price}
          </td>
          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            {property.location}
          </td>
          
          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            {property.postedAt}
          </td>
          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            <button
              className="px-4 py-2 border rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white"
              onClick={()=>handleSeeDetails(property._id)}
            >
              See Details
            </button>
          </td>
          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            <button
              className="px-4 py-2 border rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white"
              onClick={() => navigate(`/update/${property._id}`)}
            >
              Update
            </button>
          </td>
          <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs truncate">
            <button
              className="px-4 py-2 border rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white"
              onClick={() => handleDelete(property._id)}
            >
              Delete
            </button>
          </td>
        </tr>)
                
              }
            </tbody>
          </table>
  </div>

    </div>
  );
};

export default MyPropertyCard;



