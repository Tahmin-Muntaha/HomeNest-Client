import React, { useContext } from "react";
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
      furnishing: e.target.furnishing.value,
      type: e.target.type.value,
      bedrooms: e.target.bedrooms.value,
      bathrooms: e.target.bathrooms.value,
      area: e.target.area.value,
      parking: e.target.parking.value,
      facing: e.target.facing.value,
      userEmail: user.email,
      userName: user.displayName,
      postedAt: new Date(),
    };

    fetch("https://homenest-eight.vercel.app/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        navigate("/");
        toast.success("Posted Successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8] dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-48 w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=1000&auto=format&fit=crop&q=60"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center text-[#3A5A9B] dark:text-[#93C5FD]">
            Add Property
          </h2>

          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Property Name</label>
              <input name="name" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Description</label>
              <input name="description" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Category</label>
              <select name="category" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded">
                <option value="">Select category</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
                <option>Studio</option>
                <option>Office</option>
                <option>Cottage</option>
                <option>Shop</option>
                <option>Farmhouse</option>
                <option>Commercial Space</option>
                <option>Penthouse</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Price</label>
              <input name="price" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Location</label>
              <input name="location" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Image URL</label>
              <input name="image" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Furnishing</label>
              <select name="furnishing" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded">
                <option value="">Select Furnishing</option>
                <option>Unfurnished</option>
                <option>Semi-furnished</option>
                <option>Fully furnished</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Type</label>
              <select name="type" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded">
                <option value="">Select Type</option>
                <option value="Rent">For Rent</option>
                <option value="Sale">For Sale</option>
              </select>
            </div>

            <div className="flex gap-3">
              <div className="w-full">
                <label className="text-sm text-[#3A5A9B] dark:text-white">Bedrooms</label>
                <input name="bedrooms" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
              </div>
              <div className="w-full">
                <label className="text-sm text-[#3A5A9B] dark:text-white">Bathrooms</label>
                <input name="bathrooms" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
              </div>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Area (sq ft)</label>
              <input name="area" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" />
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Parking</label>
              <select name="parking" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded">
                <option value="">Select Parking</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Facing</label>
              <select name="facing" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded">
                <option value="">Select Face</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>
            </div>

            <button className="w-full px-4 py-2 border rounded-xl text-[#3A5A9B] dark:text-[#93C5FD] hover:bg-[#3A5A9B] hover:text-white">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
