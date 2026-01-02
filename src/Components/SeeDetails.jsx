import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import {
  User,
  Clock,
  MapPin,
  BedDouble,
  Bath,
  Car,
  Compass,
  Square
} from "lucide-react";

const SeeDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        setProperty(data);
        setLoading(false);
      });
  }, [id]);

  const handleRating = (e) => {
    e.preventDefault();
    fetch("https://homenest-eight.vercel.app/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        propertyId: property._id,
        propertyName: property.propertyName,
        rated_by: user.email,
        user_name: user.displayName,
        image: property.imageLink,
        rating: e.target.rating.value,
        review: e.target.review.value,
        postedAt: new Date()
      })
    })
      .then(() => toast.success("Review Submitted"))
      .catch(err => toast.error(err.message));
  };

  if (loading)
    return (
      <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );

  return (
    <div className="dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <img
          src={property.imageLink}
          className="w-full h-[360px] object-cover rounded-xl"
        />

        <div className="mt-6">
          <p className="text-sm uppercase tracking-widest text-[#4FA3A5]">
            {property.category} • {property.type}
          </p>

          <h1 className="text-3xl font-bold text-[#3A5A9B] dark:text-white mt-1">
            {property.propertyName}
          </h1>

          <p className="text-xl mt-2 text-[#4FA3A5]">
            ৳ {property.price}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12 text-black dark:text-white">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#3A5A9B] dark:text-[#4FA3A5]">
              Overview
            </h2>
            <p className="mt-3 leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <BedDouble className="text-[#3A5A9B]" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="text-[#3A5A9B]" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-3">
              <Square className="text-[#3A5A9B]" />
              <span>{property.area} sq ft</span>
            </div>
            <div className="flex items-center gap-3">
              <Car className="text-[#3A5A9B]" />
              <span>Parking: {property.parking}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <div className="flex items-center gap-3">
              <Compass className="text-[#4FA3A5]" />
              <span>Facing {property.facing}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#4FA3A5]" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="text-[#4FA3A5]" />
              <span>{property.userName}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#4FA3A5]" />
              <span>{new Date(property.postedAt).toDateString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#3A5A9B] dark:text-[#4FA3A5]">
            Leave a Review
          </h3>

          <form onSubmit={handleRating} className="space-y-4">
            <input
              name="rating"
              placeholder="Rating (1–5)"
              className="w-full border px-4 py-2 rounded dark:bg-black dark:text-white dark:border-gray-600"
            />
            <textarea
              name="review"
              placeholder="Your review"
              className="w-full border px-4 py-3 rounded resize-none h-28 dark:bg-black dark:text-white dark:border-gray-600"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 border rounded-xl text-[#3A5A9B] hover:bg-[#3A5A9B] hover:text-white transition dark:text-[#4FA3A5] dark:hover:bg-[#4FA3A5]"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
