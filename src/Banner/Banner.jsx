import React from 'react';
import Banners from'../imgBanner/Banner-min.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full h-[450px] object-cover opacity-60' src={Banners} alt="" />
            <div className='absolute bottom-40 ml-20'>
            <h1 className='text-5xl font-bold'>Bid on Unique Items from <br />Around the World</h1>
            <p className='mt-6 opacity-70'>Discover rare collectibles, luxury goods, and vintage treasures <br /> in our curated auctions</p>
            <button className='btn btn-warning mt-6 rounded-4xl text-white h-12 w-40'>Explore Auctions</button>
            </div>
            
        </div>
    );
};

export default Banner;