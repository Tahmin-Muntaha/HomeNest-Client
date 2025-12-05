import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>Why Choose Us</p>
                <div className='flex items-center justify-center p-12 md:p-24 gap-4 md:gap-20 shadow-2xl'>
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
                        <img src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"></img>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>HomeNest Insights - Tips, Guides & Trends</p>
                <div className='flex items-center justify-center p-12 md:p-24 gap-4 md:gap-20 shadow-2xl'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"></img>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <p className='text-2xl'>__Home Buying Tips</p>
                            <p>Learn how to choose the perfect property, check legal documents, and negotiate the best deal.</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-2xl'>__Investment Advice</p>
                            <p>Discover smart property investments, market hotspots, and rental income strategies.</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-2xl'>__Market Trends</p>
                            <p>Stay updated with local real estate prices, emerging neighborhoods, and upcoming projects.</p>
                        </div>
                         <div className='mb-2'>
                            <p className='text-2xl'>__DIY Home Improvement</p>
                            <p>Simple tips to increase your property’s value and make your home more comfortable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <p className='font-bold text-xl text-center mb-2 text-[#1E40AF]'>Frequently Asked Questions</p>
                <div className='flex items-center justify-center p-12 md:p-24 gap-4 md:gap-20 shadow-2xl'>
                    <div>
                        <div className='mb-2'>
                            <p className='text-2xl'>How do I find properties in my preferred area?</p>
                            <p>Use our search filters by location, price, and property type to find the perfect match quickly.</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-2xl'>Are all listings verified?</p>
                            <p>Yes! Every property on HomeNest is carefully verified to ensure authenticity and safety</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-2xl'>Is my payment and personal info safe?</p>
                            <p>Yes. All transactions are encrypted and handled securely to protect your information.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;