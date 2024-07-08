import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, MENU_ITEM_TYPE_KEY } from '../config';
import useRestaurant from '../utils/useRestaurant';
import {MenuShimmer} from './Shimmer';
import { addItem } from '../utils/cardSlice';
import { useDispatch } from 'react-redux';
const RestaurantMenu = () => {
    const {id} = useParams();
    // console.log(id)

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

    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    
    return (!restaurant) ? <MenuShimmer/> :(
        <div className='restaurant-menu'>
            <div className='restaurant-summary'>
                <img
                    className='restaurant-img'
                    src={IMG_CDN_URL + restaurant?.data?.cards[0]?.card?.card?.info?.imageId}
                    alt={restaurant?.data?.cards[0].card?.card?.info?.name}
                />
                <div className='restaurant-summary-details'>
                    <h2 className='restaurant-title'>
                        {restaurant?.data?.cards[0]?.card?.card?.info?.name}
                    </h2> 
                    <p className='restaurant-tags'>
                        {restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(', ')}
                    </p>
                    <div className='restaurant-details'>
                        <div
                            className='restaurant-rating'
                            style={
                                restaurant?.data?.cards[0]?.card?.card?.info?.avgRating < 4
                                    ? { backgroundColor: 'var(--light-red)' }
                                    : restaurant?.data?.cards[0]?.card?.card?.info?.avgRating === '--'
                                    ? { backgroundColor: "white", color: "black" }
                                    : { color:'white'}
                            }
                        >
                            <i className='fa-solid fa-star'></i>
                            <span>{ restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</span>
                        </div>
                        <div className='restaurant-rating-slash'>|</div>
                        <div>{ restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>
        
            <div className='restaurant-menu-content'>
                <div className='menu-items-container'>
                    <div className='menu-title-wrap'>
                        <h3 className='menu-title'>Recommended</h3>
                        <p className='menu-count'>{menuItems.length} Items</p>
                    </div>
                
                    <div className='menu-item-list'>
                        {menuItems.map((item) => (
                            <div className='menu-item' key={item.id} >
                                <div className='menu-item-details'>
                                    <h3 className='item-title'>{item.name}</h3>
                                    <p className='item-cost'>
                                        {item.price > 0 ?
                                            new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item.price / 100)
                                            : " "
                                        }
                                    </p>
                                    <p className='item-desc'>{ item?.description }</p>
                                </div>
                                <div className='menu-img-wrapper'>
                                    {item?.imageId && (
                                        <img
                                            className='menu-item-img'
                                            src={IMG_CDN_URL + item?.imageId}
                                            alt={item?.name}
                                        />
                                    )}
                                    <button
                                        className='add-btn'
                                        onClick={() => addFoodItem(item)}
                                    >Add +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;