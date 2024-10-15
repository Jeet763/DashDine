import { CDN_URL } from "../utils/constants";
//THE ABOVE IMPORT LOOKS DIFFERENT BECAUSE WE HAVE USED NAMED EXPORT IN UTILS / CONSTANTS.JS

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwo,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logoxyz"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
