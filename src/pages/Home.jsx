import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>Why Choose Us</p>
                <div className='grid grid-cols-2 p-12 md:p-24 gap-4 md:gap-20 shadow-2xl'>
                    <div>
                        <div>
                            <p className='text-2xl'>__Trusted & Verified Listings</p>
                            <p>We ensure every property is genuine and verified. No hidden information, no surprises — just the home you deserve.</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-2xl'>__Wide Range of Properties</p>
                            <p>From luxury villas to cozy apartments, we have properties to fit every budget and lifestyle.</p>
                        </div>
                        <div>
                            <p className='text-2xl'>__Easy & Transparent Process</p>
                            <p>Our platform makes searching, contacting owners, and booking simple and transparent. Hassle-free experience guaranteed.</p>
                        </div>
                    </div>
                    <div>
                        <div >
                            <p className='text-2xl'>__Expert Support</p>
                            <p>Our friendly property experts guide you through every step — from finding the right home to completing the deal.</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-2xl'>__Safe & Secure</p>
                            <p>We prioritize your safety. All transactions and interactions are secure, trustworthy, and reliable.</p>
                        </div>
                        <div>
                            <p className='text-2xl'>__Innovative Technology</p>
                            <p>We use smart search tools, interactive maps, and filters to help you find the perfect property faster and smarter.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;