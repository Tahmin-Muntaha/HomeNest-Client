import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
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
    console.log(formData);
    fetch(`https://homenest-eight.vercel.app/properties/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate(`/details/${data._id}`);
        toast.success("Updated Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    // <div>
    //   <div className="flex gap-0 items-center shadow-2xl max-w-[800px] mx-auto">
    //     <div>
    //       <img
    //         src="https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    //         className="h-[530px] "
    //       ></img>
    //     </div>
    //     <div className=" p-10 ">
    //       <p className="font-bold text-xl text-center mb-2 text-[#1E40AF]">
    //         Sign In
    //       </p>
    //       <form onSubmit={handleAdd}>
    //         <div>
    //           <label className="text-xl text-[#050505] mb-2">
    //             __Property Name
    //           </label>
    //           <br></br>
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="enter your property"
    //             defaultValue={data.propertyName}
    //             className="border  pl-2 pr-36 py-2"
    //           ></input>
    //         </div>

    //         <div className="">
    //           <label className="text-xl text-[#050505] mb-2">
    //             __Description
    //           </label>
    //           <br></br>
    //           <input
    //             type="text"
    //             name="description"
    //             placeholder="enter your description"
    //             defaultValue={data.description}
    //             className="border  pl-2 pr-36 py-2"
    //           ></input>
    //         </div>
    //         <div className="">
    //           <label className="text-xl text-[#050505] mb-2">__Category</label>
    //           <br></br>
    //           <select
    //             name="category"
    //             required
    //             className="select border  pl-2 pr-36 py-2"
    //           >
    //             <option value="" disabled defaultValue={data.category}>
    //               Select category
    //             </option>
    //             <option value="Apartment">Apartment</option>
    //             <option value="Villa">Villa</option>
    //             <option value="House">House</option>
    //             <option value="Studio">Studio</option>
    //             <option value="Office">Office</option>
    //             <option value="Cottage">Cottage</option>
    //             <option value="Shop">Shop</option>
    //             <option value="Farmhouse">Farmhouse</option>
    //             <option value="Commercial Space">Commercial Space</option>
    //             <option value="Penthouse">Penthouse</option>
    //             <option value="Other">Other</option>
    //           </select>
    //         </div>
    //         <div className="">
    //           <label className="text-xl text-[#050505] mb-2">__Price</label>
    //           <br></br>
    //           <input
    //             type="text"
    //             name="price"
    //             placeholder="enter your price"
    //             defaultValue={data.price}
    //             className="border  pl-2 pr-36 py-2"
    //           ></input>
    //         </div>
    //         <div className="">
    //           <label className="text-xl text-[#050505] mb-2">__Location</label>
    //           <br></br>
    //           <input
    //             type="text"
    //             name="location"
    //             placeholder="enter your location"
    //             defaultValue={data.location}
    //             className="border  pl-2 pr-36 py-2"
    //           ></input>
    //         </div>
    //         <div className="">
    //           <label className="text-xl text-[#050505] mb-2">__Image URL</label>
    //           <br></br>
    //           <input
    //             type="text"
    //             name="image"
    //             placeholder="enter your image URL"
    //             defaultValue={data.imageLink}
    //             className="border  pl-2 pr-36 py-2"
    //           ></input>
    //         </div>
    //         <div className="my-3 flex justify-center">
    //           <button className="px-4 py-2 border rounded hover:bg-[#FACC15] ">
    //             Update Property
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8] dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-48 w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center text-[#3A5A9B] dark:text-[#93C5FD]">
            Update Property
          </h2>

          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Property Name</label>
              <input name="name" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded"  defaultValue={data.propertyName}/>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Description</label>
              <input name="description" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" defaultValue={data.description}/>
            </div>

            <div>
  <label className="text-sm text-[#3A5A9B] dark:text-white">Category</label>
  <select
    name="category"
    className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded"
    defaultValue={data.category} 
  >
    <option value="">Select category</option>
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


            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Price</label>
              <input name="price" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded"  defaultValue={data.price}/>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Location</label>
              <input name="location" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" defaultValue={data.location}/>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Image URL</label>
              <input name="image" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded"  defaultValue={data.imageLink}/>
            </div>

            <div>
  <label className="text-sm text-[#3A5A9B] dark:text-white">Furnishing</label>
  <select
    name="furnishing"
    className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded"
    defaultValue={data.furnishing} 
  >
    <option value="">Select Furnishing</option>
    <option value="Unfurnished">Unfurnished</option>
    <option value="Semi-furnished">Semi-furnished</option>
    <option value="Fully furnished">Fully furnished</option>
  </select>
</div>


           <div>
  <label className="text-sm text-[#3A5A9B] dark:text-white">Type</label>
  <select
    name="type"
    className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded"
    defaultValue={data.type} 
  >
    <option value="">Select Type</option>
    <option value="Rent">For Rent</option>
    <option value="Sale">For Sale</option>
  </select>
</div>


            <div className="flex gap-3">
              <div className="w-full">
                <label className="text-sm text-[#3A5A9B] dark:text-white">Bedrooms</label>
                <input name="bedrooms" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" defaultValue={data.bedrooms} />
              </div>
              <div className="w-full">
                <label className="text-sm text-[#3A5A9B] dark:text-white">Bathrooms</label>
                <input name="bathrooms" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded"  defaultValue={data.bathrooms}/>
              </div>
            </div>

            <div>
              <label className="text-sm text-[#3A5A9B] dark:text-white">Area (sq ft)</label>
              <input name="area" type="number" className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-transparent dark:text-white px-3 py-2 rounded" defaultValue={data.area}/>
            </div>

            <div>
  <label className="text-sm text-[#3A5A9B] dark:text-white">Parking</label>
  <select
    name="parking"
    className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded"
    defaultValue={data.parking} 
  >
    <option value="">Select Parking</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


            <div>
  <label className="text-sm text-[#3A5A9B] dark:text-white">Facing</label>
  <select
    name="facing"
    className="w-full border border-[#3A5A9B] dark:border-gray-600 dark:bg-[#111827] dark:text-white px-3 py-2 rounded"
    defaultValue={data.facing} 
  >
    <option value="">Select Face</option>
    <option value="North">North</option>
    <option value="South">South</option>
    <option value="East">East</option>
    <option value="West">West</option>
  </select>
</div>


            <button className="w-full px-4 py-2 border rounded-xl text-[#3A5A9B] dark:text-[#93C5FD] hover:bg-[#3A5A9B] hover:text-white">
              Update Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
