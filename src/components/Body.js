import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter"></div>
      <input
        type="text"
        value={searchRestaurant}
        onChange={(e) => {
          setSearchRestaurant(e.target.value);
          const filteredRes = listOfRestaurants.filter((res) => 
            res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
          );
          setFilteredRestaurants(filteredRes);
        }}
      />
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
           <Link key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}> <RestaurantCard resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;