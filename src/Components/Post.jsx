import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Post = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = {
      propertyName: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      price: e.target.price.value,
      location: e.target.location.value,
      imageLink: e.target.image.value,
      userEmail: user.email,
      userName: user.displayName,
      postedAt: new Date(),
    };
    console.log(formData);
    fetch("https://homenest-eight.vercel.app/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        toast.success("Posted Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="flex gap-0 items-center shadow-2xl max-w-[800px] mx-auto">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            className="h-[530px] "
          ></img>
        </div>
        <div className=" p-10 ">
          <p className="font-bold text-xl text-center mb-2 text-[#1E40AF]">
            Sign In
          </p>
          <form onSubmit={handleAdd}>
            <div>
              <label className="text-xl text-[#050505] mb-2">
                __Property Name
              </label>
              <br></br>
              <input
                type="text"
                name="name"
                placeholder="enter your property"
                className="border  pl-2 pr-36 py-2"
              ></input>
            </div>

            <div className="">
              <label className="text-xl text-[#050505] mb-2">
                __Description
              </label>
              <br></br>
              <input
                type="text"
                name="description"
                placeholder="enter your description"
                className="border  pl-2 pr-36 py-2"
              ></input>
            </div>
            <div className="">
              <label className="text-xl text-[#050505] mb-2">__Category</label>
              <br></br>
              <select
                name="category"
                required
                className="select border  pl-2 pr-36 py-2"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="House">House</option>
                <option value="Studio">Studio</option>
                <option value="Office">Office</option>
                <option value="Cottage">Cottage</option>
                <option value="Shop">Shop</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="">
              <label className="text-xl text-[#050505] mb-2">__Price</label>
              <br></br>
              <input
                type="text"
                name="price"
                placeholder="enter your price"
                className="border  pl-2 pr-36 py-2"
              ></input>
            </div>
            <div className="">
              <label className="text-xl text-[#050505] mb-2">__Location</label>
              <br></br>
              <input
                type="text"
                name="location"
                placeholder="enter your location"
                className="border  pl-2 pr-36 py-2"
              ></input>
            </div>
            <div className="">
              <label className="text-xl text-[#050505] mb-2">__Image URL</label>
              <br></br>
              <input
                type="text"
                name="image"
                placeholder="enter your image URL"
                className="border  pl-2 pr-36 py-2"
              ></input>
            </div>
            <div className="my-3 flex justify-center">
              <button className="px-4 py-2 border rounded hover:bg-[#FACC15] ">
                Add Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
