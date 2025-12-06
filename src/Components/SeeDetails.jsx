import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const SeeDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      });
  }, []);
  const handleRating = (e) => {
    e.preventDefault();
    const rating = e.target.rating?.value;
    const review = e.target.review?.value;
    fetch("https://homenest-eight.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        propertyId: property._id,
        propertyName: property.propertyName,
        rated_by: user.email,
        user_name: user.displayName,
        imgae: property.imageLink,
        rating,
        review,
        postedAt: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
  console.log(property);
  return (
    <div className="flex gap-4 items-center justify-center">
      <div>
        <img src={property.imageLink} className=" md:h-[400px]"></img>
      </div>
      <div className="text-xl">
        <p className="text-2xl font-bold">{property.propertyName}</p>
        <p>__Category : {property.category}</p>
        <p>__Price : {property.price}</p>
        <p>__Location : {property.location}</p>
        <p>__Posted by : {property.userName}</p>
        <p>__Description : {property.description}</p>
        <form onSubmit={handleRating}>
          <div>
            <label>__Rating : </label>
            <br></br>
            <input
              type="text"
              name="rating"
              placeholder="Rate this property(1 to 5)"
              className="border pl-2 pr-8 py-2"
            ></input>
          </div>
          <div>
            <label>__Review : </label>
            <br></br>
            <input
              type="text"
              name="review"
              placeholder="Review this property"
              className="border pl-2 pr-8 py-2"
            ></input>
          </div>
          <button
            type="submit"
            className="px-4 py-2 hover:bg-[#FACC15] my-2 rounded-2xl border"
          >
            Submit
          </button>
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
