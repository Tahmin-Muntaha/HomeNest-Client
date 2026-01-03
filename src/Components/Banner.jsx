import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router';

const Banner = () => {
  return (
    <div className="z-10 mb-20">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative h-[380px] rounded-3xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1540359319315-f69be3a17e9d?w=1000&auto=format&fit=crop&q=60"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

  <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-xl">
    <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
      Find a place you’ll love to call home
    </p>

    <p className="mt-3 text-sm md:text-base text-gray-200">
      Thousands of verified homes, offices, and spaces — ready for you to explore.
    </p>

    <NavLink
      to="/all"
      className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
    >
      Explore All Properties
    </NavLink>
  </div>
</div>
<div className="relative h-[380px] rounded-3xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1638215871539-53013a0c7513?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbHN0YXRlfGVufDB8fDB8fHww"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

  <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-xl">
  <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
    List your property. Reach the right buyers.
  </p>

  <p className="mt-3 text-sm md:text-base text-gray-200">
    Share your home or space with thousands of active users looking for their next place. 
    Adding a property takes just a few minutes.
  </p>

  <NavLink
    to="/post"
    className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
  >
    Add Your Property
  </NavLink>
</div>

</div>

        <div className="relative h-[360px] rounded-3xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1565480401286-ea5dceac02a8?q=80&w=1170&auto=format&fit=crop"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-2xl">
    <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
      More than listings. A story behind every home.
    </p>

    <p className="mt-4 text-sm md:text-base text-gray-200">
      We believe finding a home should feel personal, honest, and stress-free.
      Learn why thousands trust HomeNest every day.
    </p>

    <NavLink
      to="/about"
      className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
    >
      About Us
    </NavLink>
  </div>
</div>

        <div className="relative h-[360px] rounded-3xl overflow-hidden">
  <img
    src="https://plus.unsplash.com/premium_photo-1679582754971-5a2d8ae7e6fa?w=1000&auto=format&fit=crop&q=60"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-2xl">
    <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
      Transparency you can trust.
    </p>

    <p className="mt-4 text-sm md:text-base text-gray-200">
      We keep everything clear and fair so you always know what to expect while
      using HomeNest. No hidden rules. No surprises.
    </p>

    <NavLink
      to="/term"
      className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
    >
      Terms & Conditions
    </NavLink>
  </div>
</div>

        
      </Carousel>
    </div>
  );
};

export default Banner;
