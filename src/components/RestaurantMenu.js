import React from 'react';
// import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    // const[ resInfo , setResInfo ] = useState(null);
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(); 

//     useEffect(()=>{
//         fetchMenu();
//     },[]);

// const fetchMenu= async() =>{
//     const data = await fetch(MENU_API + resId );
//     const json = await data.json();
//     console.log(json);  
//     // console.log(json?.data?.cards[2]?.card?.card?.info);
//     setResInfo(json.data);
// };

if (resInfo === null )  return  <Shimmer />  ;
  
const {name , cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
 return  (

    <div className = "menu">
      <h1>{name} </h1>
      <h3>{cuisines.join(",")} - {costForTwoMessage } </h3>
      <h1>Menu</h1> 
      <ul>
       { itemCards.map((item) => ( <li key ={item.card.info.id}>{item.card.info.name} - {item.card.info.price || item.card.info.defaultPrice}</li>)) }
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
