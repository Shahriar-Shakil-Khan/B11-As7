import React from 'react';

const Footer = () => {
    return (
        <div >
            <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10 bg-[#312d2d]">
                <a className="text-xl font-bold">
        <span className="text-blue-700 text-2xl">Auction<span className="text-yellow-500 text-2xl"> Gallery</span></span>
        
        </a>
       
  <nav className="grid grid-flow-col gap-4 font-bold">
    <a className="link link-hover">Bid.</a>
    <a className="link link-hover">Win.</a>
    <a className="link link-hover">Own.</a>
    
  </nav>
    <nav>
        <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Auctions</a>
        <a className="link link-hover">Categoris</a>
        <a className="link link-hover">How to works</a>
        
        
        </div>
    </nav>
  <aside>
    <p>©{new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;

