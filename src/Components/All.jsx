import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Property from "./Property";
import { NavLink } from "react-router";

const All = () => {
  const [proerties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalProperties,setTotalProperties]=useState(0)
  const [totalpage,setTotalpage]=useState(0)
  const [currentPage,setCurrentPage]=useState(0)
  const limit=8
  
  useEffect(() => {
    fetch(`https://homenest-eight.vercel.app/properties?limit=${limit}&skip=${currentPage*limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.result);
        setTotalProperties(data.total)
        const page=Math.ceil(data.total/limit)
        setTotalpage(page)
        setLoading(false);
      });
  }, [currentPage]);
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
    <div className="mb-16">
      <div className="mb-16 flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between">

  {/* Search */}
  <form
    onSubmit={handleSearch}
    className="flex items-center w-full md:max-w-md bg-white dark:bg-black rounded-2xl shadow-lg border border-[#3A5A9B]/20 overflow-hidden"
  >
    <span className="px-4 text-[#3A5A9B]">
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </span>

    <input
      type="search"
      name="search"
      placeholder="Search by category..."
      className="flex-1 px-2 py-3 bg-transparent outline-none text-sm text-gray-700 dark:text-white placeholder-gray-400"
    />

    <button className="px-6 py-3 bg-[#3A5A9B] text-white font-semibold hover:bg-[#2f4a86] transition">
      Search
    </button>
  </form>

  {/* Sort */}
  <form onSubmit={handleSort}>
    <button className="px-6 py-3 rounded-2xl border border-[#4FA3A5] text-[#4FA3A5] font-semibold hover:bg-[#4FA3A5] hover:text-white transition shadow-md">
      Sort by Price ↑
    </button>
  </form>

</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {proerties.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
     
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
  {[...Array(totalpage).keys()].map((i) => (
    <button onClick={()=>setCurrentPage(i)} className={`mr-1 px-4 py-2 border rounded-xl text-[#4FA3A5] ${i===currentPage && "bg-[#3A5A9B] text-white"}`}> {i}</button>
  ))}
</div>

      </div>
    
  );
};

export default All;
