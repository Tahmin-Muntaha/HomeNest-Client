import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import RatingCard from "./RatingCard";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRating(data);
        setLoading(false);
      });
  }, []);
  if (loading) return;
  <div className="flex justify-center">
    <div>
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  </div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {rating.map((r) => (
        <RatingCard r={r}></RatingCard>
      ))}
    </div>
  );
};

export default MyRatings;
