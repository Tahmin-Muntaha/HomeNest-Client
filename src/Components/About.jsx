import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
  <div className="max-w-5xl mx-auto space-y-20">

    
    <section className="text-center">
      <h1 className="text-5xl font-bold text-[#3A5A9B] mb-6">About Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
        Welcome to <span className="font-semibold text-[#4FA3A5]">YourProperty</span> – your trusted partner in finding the perfect property!
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        Our platform provides a seamless experience for buying, selling, and renting properties, making your journey simple and stress-free.
      </p>
    </section>

    
    <section className="grid md:grid-cols-2 gap-12 text-gray-700 dark:text-gray-200">
      <div>
        <h2 className="text-3xl font-bold text-[#3A5A9B] mb-4">Our Mission</h2>
        <p className="text-lg">
          To provide a trustworthy, transparent, and user-friendly platform that simplifies the property search process and connects buyers, sellers, and renters seamlessly.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#4FA3A5] mb-4">Our Vision</h2>
        <p className="text-lg">
          To become the leading online property platform, empowering people to find their dream homes and commercial spaces with confidence and ease.
        </p>
      </div>
    </section>

    
    <section>
      <h2 className="text-3xl font-bold text-[#3A5A9B] mb-6 text-center">Our Values</h2>
      <div className='flex justify-center items-center'>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200 md:max-w-3xl mx-auto flex gap-20 items-center">
        <div>
        <li>• Transparency</li>
        <li>• Trust</li>
        <li>• Customer Satisfaction</li>
        </div>
        <div>
            <li>• Innovation</li>
        <li>• Reliability</li>
        <li>• Integrity</li>
        </div>
      </ul>
      </div>
    </section>

  </div>
</div>


    );
};

export default About;