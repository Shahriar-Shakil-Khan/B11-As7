import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {

    const [items,setItems]=useState([])
    
    useEffect(()=>{

        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data)) 
    },[])

    return (
        <div>
            <h2>Active Auctions</h2>
            <h6>Discover and bid on extraordinary items</h6>
            <h1 className='text-2xl font-bold'>Items : {items.length}</h1>
            <div className='all-items grid grid-cols-2'>
                {
                  items.map((item)=><Item item={item}></Item>)  
                }
            </div>
        </div>
    );
};

export default Items;

