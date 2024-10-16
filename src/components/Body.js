import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  //1. [listOfRestaurants, setListOfRestaurant] is Array Destructuring
  //2.SetListOfRestaurants is a call back function
  return (
    <div className="body">
      <div className="filter"></div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
