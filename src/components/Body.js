import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  //1. [listOfRestaurants, setListOfRestaurant] is Array Destructuring
  //2.SetListOfRestaurants is a call back function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json.data.cards[0].card.card.type);
  };

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
