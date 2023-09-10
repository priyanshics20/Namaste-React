import { IMG_CDN_URL } from "../config";
const FoodItems = ({ name, price,ratings, imageId}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + imageId} /> 
            <h3>{ name }</h3>
            {/* <h5>{ ratings.aggregateratedRating}</h5> */}
            <h4>Rs.{price/100}</h4>
      </div>  
    );
}

export default FoodItems;