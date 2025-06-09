import React from 'react';

const Carts = ({ marked }) => {
  return (
    <div className="space-y-4">
      {marked.map((item) => (
        <div className="flex items-center justify-between border rounded p-2 shadow  bg-amber-800">
          <img src={item.image} alt='' className="w-14 h-14 object-cover rounded" />
          <div className="flex-1 ml-3 text-left">
            <h4 className="font-semibold text-sm">{item.title}</h4>
            <p className="text-xs text-white">${item.currentBidPrice}</p>
            <p className="text-xs text-white">Bids: {item.bidsCount}</p>
          </div>
          <button className="text-red-500 font-bold text-lg">✕</button>
        </div>
      ))}
    </div>
  );
};

export default Carts;
 