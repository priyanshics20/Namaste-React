import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId,locality}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL +cloudinaryImageId} /> 
            <h3>{ name }</h3>
            <h5>{ cuisines && cuisines.join(", ") }</h5>
            <h4>{avgRating}</h4>
            <h4>{ locality }</h4>
      </div>  
    );
}

export default RestaurantCard;