import React, { useEffect, useState } from 'react';

const Items = () => {

    const [items,setItems]=useState([])
    
    useEffect(()=>{

        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data)) 
    },[])
    console.log(items)

    return (
        <div>
            
        </div>
    );
};

export default Items;

