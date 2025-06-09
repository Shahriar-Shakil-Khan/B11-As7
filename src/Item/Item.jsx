import React, { useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
 import { ToastContainer, toast } from 'react-toastify';

 const Item = ({item,notify,favHandleItem}) => {
  const[clicked,setClicked]=useState(false);
   
    return (
        <div className='m-6 '>
            <div className="card bg-base-100 w-96  border-2">
  <figure>
    <img className='object-cover w-full h-60'
      src={item.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="badge badge-secondary h-10 w-11/12">{item.title}</div>
      <div><button className={`ml-2 ${
                  clicked ? 'text-red-600 cursor-not-allowed' : 'text-gray-700 hover:text-red-500'
                }`} disabled={clicked} onClick={()=>{notify();setClicked(true);favHandleItem(item)}}>< MdFavoriteBorder size={40}/></button><ToastContainer /></div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Price : ${item.currentBidPrice}</div>
      <div className="badge badge-outline">Time :{item.timeLeft}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Item;