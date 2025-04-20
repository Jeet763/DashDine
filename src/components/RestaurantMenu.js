import React from 'react'
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const[ resInfo , setResInfo ] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu= async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
};
  
 return resInfo === null ? ( <Shimmer/> ) : (

    <div>
      <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <l1>Biryani</l1>
        <l1>Burgers</l1>
        <l1>Diet Coke</l1>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
