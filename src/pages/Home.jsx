import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import { data } from "react-router";
import Property from "../Components/Property";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://homenest-eight.vercel.app/latest-properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
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
  console.log(properties);
  return (
    <div>
      
      <Banner className="z-10"></Banner>
      <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Our Latest Properties</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {properties.map((property) => (
          <Property property={property}></Property>
        ))}
      </div>
<div className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Why Choose Us</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

     
      <div className="flex-1 space-y-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Trusted & Verified Listings</p>
          <p className="text-gray-700 dark:text-gray-200">
            We ensure every property is genuine and verified. No hidden information, no surprises — just the home you deserve.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Wide Range of Properties</p>
          <p className="text-gray-700 dark:text-gray-200">
            From luxury villas to cozy apartments, we have properties to fit every budget and lifestyle.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Easy & Transparent Process</p>
          <p className="text-gray-700 dark:text-gray-200">
            Our platform makes searching, contacting owners, and booking simple and transparent. Hassle-free experience guaranteed.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
            alt="Properties"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500  hidden md:block"
          />
        </div>
      </div>

    </div>
  </div>
</div>

<div className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">
      HomeNest Insights - Tips, Guides & Trends
    </p>
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

      {/* Image */}
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Insights"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500  hidden md:block"
          />
        </div>
      </div>

      {/* Tips & Guides */}
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Home Buying Tips</p>
          <p className="text-gray-700 dark:text-gray-200">
            Learn how to choose the perfect property, check legal documents, and negotiate the best deal.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Investment Advice</p>
          <p className="text-gray-700 dark:text-gray-200">
            Discover smart property investments, market hotspots, and rental income strategies.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Market Trends</p>
          <p className="text-gray-700 dark:text-gray-200">
            Stay updated with local real estate prices, emerging neighborhoods, and upcoming projects.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">DIY Home Improvement</p>
          <p className="text-gray-700 dark:text-gray-200">
            Simple tips to increase your property’s value and make your home more comfortable.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">
      Frequently Asked Questions
    </p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

      {/* FAQ Items */}
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">
            How do I find properties in my preferred area?
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Use our search filters by location, price, and property type to find the perfect match quickly.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">
            Are all listings verified?
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Yes! Every property on HomeNest is carefully verified to ensure authenticity and safety.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">
            Is my payment and personal info safe?
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Yes. All transactions are encrypted and handled securely to protect your information.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="FAQ"
            className="w-full h-full object-cover hidden md:block transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

    </div>
  </div>
</div>


<div className=" py-16">
  
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Featured Neighborhoods</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&auto=format&fit=crop&q=60"
            alt="Neighborhoods"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 hidden md:block"
          />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Downtown Living</p>
          <p className="text-gray-700 dark:text-gray-200">
            Explore apartments and condos in the heart of the city with all amenities nearby.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Suburban Comfort</p>
          <p className="text-gray-700 dark:text-gray-200">
            Find cozy homes in quiet neighborhoods perfect for families and peace of mind.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</div>


<div className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Client Testimonials</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">John D.</p>
          <p className="text-gray-700 dark:text-gray-200">
            "Found my dream apartment in no time! The process was smooth and transparent."
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Sara L.</p>
          <p className="text-gray-700 dark:text-gray-200">
            "Amazing service and verified listings. Highly recommend HomeNest!"
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1000&auto=format&fit=crop&q=60"
            alt="Testimonials"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 hidden md:block"
          />
        </div>
      </div>
    </div>
  </div>
</div>



<div className=" py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">How It Works</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1000&auto=format&fit=crop&q=60"
            alt="How It Works"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 hidden md:block"
          />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Search Properties</p>
          <p className="text-gray-700 dark:text-gray-200">
            Use our filters to find properties that match your needs and budget.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Connect With Owners</p>
          <p className="text-gray-700 dark:text-gray-200">
            Contact property owners directly through the platform for inquiries and visits.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Book & Move In</p>
          <p className="text-gray-700 dark:text-gray-200">
            Confirm the deal and enjoy a smooth move-in process with verified properties.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</div>


<div className=" py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Latest Projects</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Luxury Villas</p>
          <p className="text-gray-700 dark:text-gray-200">
            Check out our latest villas in prime locations with top-notch amenities.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Modern Apartments</p>
          <p className="text-gray-700 dark:text-gray-200">
            Stylish apartments designed for comfort and urban living.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=60"
            alt="Latest Projects"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 hidden md:block"
          />
        </div>
      </div>
    </div>
  </div>
</div>


<div className="py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <p className="text-3xl font-bold text-center text-[#3A5A9B] mb-12">Our Services</p>
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <div className="flex-1">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=60"
            alt="Our Services"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 hidden md:block"
          />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Property Listing</p>
          <p className="text-gray-700 dark:text-gray-200">
            List your property and reach verified buyers and renters quickly.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#4FA3A5]">
          <p className="text-2xl font-semibold text-[#4FA3A5] mb-2">Consultation</p>
          <p className="text-gray-700 dark:text-gray-200">
            Get expert guidance on property investment, legal documents, and market trends.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#3A5A9B]">
          <p className="text-2xl font-semibold text-[#3A5A9B] mb-2">Property Management</p>
          <p className="text-gray-700 dark:text-gray-200">
            Hassle-free management of your rental property including maintenance and tenant handling.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</div>






    </div>
  );
};

export default Home;
