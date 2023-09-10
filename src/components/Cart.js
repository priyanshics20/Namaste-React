import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
    // useSelector() is used to subscribe to the store

    // this is the place you tell what you are subscribing to 
    // here we are subscribing to only specific portion of store which is items = [];
    
    //we can also subscribe to whole store
    // const store = useSelector(store => store);
    // but this is not optimize way bcz as when we use it on large production app then after any change in store it will re-render which is not good
    
    const cardItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div>
            <h1>Cart - {cardItems.length}</h1>
            <button
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "lightgreen",
                    border: "1px solid green",
                    boxShadow: '-1px 5px 10px 5px rgba(42, 42, 42, 0.2)',
                    margin:"10px 550px"
                }}
                onClick={() => handleClearCart()}>
                Clear Cart
            </button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cardItems.map((item) => (
                    <FoodItems key={item.id} {...item} />
                ))}
            </div>
            
        </div>
    )
}

export default Cart;
