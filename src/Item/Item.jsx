import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";

const Item = ({item}) => {
    
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
      <button><MdFavoriteBorder size={40}  className='ml-2'/></button>
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