import { useState, useEffect } from "react";
import {  MENU_ITEM_TYPE_KEY , swiggy_menu_api_URL} from '../config';

// this is a hook 
const useRestaurant = (resId) => {
    // get data from API
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems,setMenuItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo();  
    }, [])
    
    async function getRestaurantInfo() {
        const data = await fetch(swiggy_menu_api_URL + resId);
        
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
        // setRestaurant(json.data);

        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        map(x => x.itemCards).flat().map(x => x.card?.info) || [];
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id === item.id)) {
                uniqueMenuItems.push(item);
            }
        })
        setMenuItems(uniqueMenuItems);
        //setMenuItems(menuItemsData);
    }

    // return restaurant data 
    return [restaurant,menuItems];

}

export default useRestaurant;