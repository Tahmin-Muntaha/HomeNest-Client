import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Clock, DollarSign, MapPinned, User } from 'lucide-react';

const Property = ({ property }) => {
    
    const navigate = useNavigate();

    const handleSeeDetails = () => {
         navigate(`/details/${property._id}`)
    };

    return (
        <div className=" rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl">
            
            <div className="relative overflow-hidden">
                <img
                    src={property.imageLink}
                    alt={property.propertyName}
                    className="h-[260px] w-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#4FA3A5] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {property.category}
                </span>
            </div>

            <div className="p-5 space-y-4">
                <h2 className="text-xl font-bold text-[#3A5A9B]">
                    {property.propertyName}
                </h2>

                <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 ">
                        <DollarSign size={18} />
                        <span className="font-semibold">{property.price}</span>
                    </p>

                    <p className="flex items-center gap-2 ">
                        <MapPinned size={18} />
                        <span className="truncate">{property.location}</span>
                    </p>

                    
                </div>

                <button
                    onClick={handleSeeDetails}
                    className="w-full mt-4 px-4 py-2 border border-[#4FA3A5] rounded-xl text-[#4FA3A5] hover:bg-[#4FA3A5] hover:text-white transition"
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default Property;
