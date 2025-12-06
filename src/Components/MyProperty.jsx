import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";
import Property from "./Property";
import MyPropertyCard from "./MyPropertyCard";

const MyProperty = () => {
  const { user } = useContext(AuthContext);
  const [my, setMy] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/my-properties?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMy(data);
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
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {my.map((property) => (
          <MyPropertyCard property={property}></MyPropertyCard>
        ))}
      </div>
    </div>
  );
};

export default MyProperty;
