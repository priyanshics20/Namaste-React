import { restraurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    // const searchText = "KFC";

    const [allRestrauants , setAllRestaurants] = useState([]);
    const [filteredrestraurants, setFilteredRestaurants] = useState([]);

    //searchTxt is a local state variable
    const [searchInput, setSearchInput] = useState("");  //To create state variable

    useEffect(() => {
        // API Call
        getRestaurants();
    }, []);

    
    async function getRestaurants() {
        //our browser doest not allow to fetch this swiggy api . we can't call swiggy api to local host
         
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        async function checkJsonData(json) {
            for (let i = 0; i < json?.data?.cards.length; i++){
                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                if (checkData !== undefined) {
                    return checkData;
                }
            }
        }
        const resData = await checkJsonData(json);
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);

        // here only cards[5]  is fetching data and sometimes it is undefined so that why we use for loop 
        // setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline , Please check your internet connection!!</h1>;
    }

    const searchData = (searchInput,restaurants) => {
        if (searchInput != "") {
            const filteredData = filterData(searchInput, restaurants);
            setFilteredRestaurants(filteredData);
        }
    }

    //not render component
    //it is known as early return 
    if (!allRestrauants) return null;   

    //conditional rendering
    // if restaurant is empty load shimmer ui 
    // if restaurant is not empty load actual data
    return allRestrauants.length === 0 ? (<Shimmer /> ):(
        <div className="body-container">
            <div className="search-container">
                <input
                    className="search-input"
                    placeholder="Search for restaurants..."
                    type="text"
                    maxLength={200}
                    
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // filter the data
                        const data = filterData(searchInput, allRestrauants);
                        // update the state - restaurants
                        setFilteredRestaurants(data);
                    }}
                >
                    {/* Search  */}
                    Search
                </button>
            </div>
            <div className="restraurant-list">
                {
                    filteredrestraurants?.map((restrauant) => {
                        return (
                            <Link to={"/restaurant/" + restrauant?.info?.id} key={restrauant?.info?.id}>
                                <RestaurantCard {...restrauant?.info} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Body;