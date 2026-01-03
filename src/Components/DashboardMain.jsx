import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import MyPropertyCard from "./MyPropertyCard";
import RatingCard from "./RatingCard";

const DashboardMain = () => {
  const { user } = useContext(AuthContext);
  const [my, setMy] = useState([]);
  const [myL, setMyL] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingL, setRatingL] = useState([]);

  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-properties?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMy(data));
  }, []);
  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-latest-properties?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyL(data));
  }, []);

  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-reviews?email=${user.email}`)
      .then(res => res.json())
      .then(data => setRating(data));
  }, []);

  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-latest-reviews?email=${user.email}`)
      .then(res => res.json())
      .then(data => setRatingL(data));
  }, []);

  const pieData = [
    { name: "Added Property", value: my.length },
    { name: "Rated Property", value: rating.length },
  ];

  const COLORS = ["#3A5A9B", "#4FA3A5"];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#3A5A9B]">
        Welcome, <span className="text-[#4FA3A5]">{user.displayName}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
            <div className="rounded-2xl p-6 bg-white dark:bg-black shadow-lg border-l-4 border-[#3A5A9B] mb-8">
          <p className="text-sm text-gray-500">Total Properties Added</p>
          <p className="text-4xl font-bold text-[#3A5A9B]">{my.length}</p>
        </div>

        <div className="rounded-2xl p-6 bg-white dark:bg-black shadow-lg border-l-4 border-[#4FA3A5]">
          <p className="text-sm text-gray-500">Total Properties Rated</p>
          <p className="text-4xl font-bold text-[#4FA3A5]">{rating.length}</p>
        </div>
        </div>
        {my.length + rating.length > 0 && (
          <div className="rounded-2xl bg-white dark:bg-black shadow-lg flex justify-center items-center">
            <PieChart width={250} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        )}

       
        

      </div>
       
      <div>
        <h1 className="text-xl font-bold mt-12 mb-6">Latest Added Property</h1>
       <MyPropertyCard my={myL}></MyPropertyCard>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-12 mb-6">Latest Rated Property</h1>
       <RatingCard rating={ratingL}></RatingCard>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="rounded-2xl p-6 bg-[#F8FAFC] dark:bg-black shadow-inner">
  <h3 className="text-lg font-semibold text-[#3A5A9B] dark:text-white mb-2">
    Dashboard Tips
  </h3>
  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
    <li>• Add more properties to increase visibility</li>
    <li>• Leave honest reviews to help buyers</li>
    <li>• Keep your listings updated</li>
  </ul>
        </div>
        <div className="rounded-2xl p-6 bg-[#F8FAFC] dark:bg-black shadow-inner ">
  <h3 className="text-lg font-semibold text-[#3A5A9B] dark:text-white mb-2">
    Property Guidelines
  </h3>
  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
    <li>• Upload clear and real property images</li>
    <li>• Mention accurate price and location</li>
    <li>• Avoid misleading descriptions</li>
    <li>• Keep property status updated</li>
  </ul>
</div>


      </div>
    </div>
  );
};

export default DashboardMain;
