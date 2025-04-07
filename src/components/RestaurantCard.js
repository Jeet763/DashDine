import { CDN_URL } from "../utils/constants";
//THE ABOVE IMPORT LOOKS DIFFERENT BECAUSE WE HAVE USED NAMED EXPORT IN UTILS / CONSTANTS.JS

const RestaurantCard = (props) => {
  const { resData } = props;



  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
  } = resData?.info ;

  return (
    <div className="res-card" >
      <img
        className="res-logo"
        alt="res-logoxyz"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
