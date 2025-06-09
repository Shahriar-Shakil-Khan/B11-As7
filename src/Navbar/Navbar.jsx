import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#FFFF] shadow-sm border-b  px-4">
 
  <div className="navbar-start">
    <a className="text-xl font-bold">
      <span className="text-blue-700">Auction</span>
      <span className="text-yellow-500">Gallery</span>
    </a>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className=' text-black'>Home</a></li>
      <li><a className=' text-black'>Auctions</a></li>
      <li><a className=' text-black'>Categories</a></li>
      <li><a className=' text-black'>How to works</a></li>
    </ul>
  </div>

  


 
  <div className="navbar-end flex gap-2">
    {/* Cart */}
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-circle bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent border-none shadow-none">
    <div className="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span className="badge badge-sm indicator-item bg-blue-900 text-white font-bold">9</span>
    </div>
  </div>
  <div tabIndex={0} className="card card-compact dropdown-content mt-3 z-[1] w-52 bg-base-100 shadow"></div>
</div>


 
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User avatar" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
            </div>
         
        </div>
    );
};

export default Navbar;



