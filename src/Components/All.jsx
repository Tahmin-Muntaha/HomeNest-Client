import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Property from "./Property";

const All = () => {
  const [proerties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://homenest-eight.vercel.app/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search?.value;
    setLoading(true);
    fetch(`https://homenest-eight.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  };
  const handleSort = (e) => {
    e.preventDefault();
    fetch("https://homenest-eight.vercel.app/sort")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  };
  console.log(proerties);
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
    <div className="">
      <div className="mb-16 flex justify-between items-center">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center "
        >
          <label className="input border">
            <svg
              className="h-[1em] opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="search"
              className=""
              placeholder="Search"
            />
          </label>
          <button className="border-0 px-4 py-2 rounded-r-xl bg-[#FACC15]">
            Search
          </button>
        </form>
        <form onSubmit={handleSort}>
          <button className="border px-4 py-2 rounded-2xl hover:bg-[#FACC15]">
            Sort by price(asc)
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {proerties.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default All;
