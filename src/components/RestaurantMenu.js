import { useEffect, useState } from 'react';
import  ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, MENU_ITEM_TYPE_KEY } from '../config';
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
    const {id} = useParams();
    console.log(id)

    // This restaurantMenu work is to only display menu but we are fetching menu api as well so insted of fetching data here we create our own hook
    // because this RestaurantMenu work is to only dispaly menu not to fetch data
    // so we create our hook useRestaurant

    // const [restaurant, setRestaurant] = useState(null);
    // const [menuItems,setMenuItems] = useState([]);

    // useEffect(() => {
    //     getRestaurantInfo();  
    // }, [])
    
    // async function getRestaurantInfo() {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + id);
        

    //     const json = await data.json();
    //     console.log(json);
    //     setRestaurant(json);


    //     const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
    //     groupedCard?.cardGroupMap?.REGULAR?.
    //     cards?.map(x => x.card?.card)?.
    //     filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    //     map(x => x.itemCards).flat().map(x => x.card?.info) || [];
        
    //     const uniqueMenuItems = [];
    //     menuItemsData.forEach((item) => {
    //         if (!uniqueMenuItems.find(x => x.id === item.id)) {
    //             uniqueMenuItems.push(item);
    //         }
    //   })
    //   setMenuItems(uniqueMenuItems);
    // //   setMenuItems(menuItemsData);
    // }
    
    // const restaurant = useRestaurant(id);
    
    const [restaurant, menuItems] = useRestaurant(id, MENU_ITEM_TYPE_KEY);
    // get API from our own hook 
    
    return (!restaurant) ? <Shimmer/> :(
        <div className='menu'>
            <div>
                <h2>RestarauntId: { restaurant?.data?.cards[0]?.card?.card?.info?.id }</h2>
                <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h5>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h5>
                <h5>{restaurant?.data?.cards[0]?.card?.card?.info?.city} </h5>
                <h4>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating} stars</h4>
                <h4>{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwo} </h4>
            </div>

            <div>
                <h1>Menu</h1>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;