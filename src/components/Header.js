import { useState } from 'react';
import Logo from '../assets/img/food_villa_logo.png';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
export const Title = () => {
    return (
        <Link href="/">
            <img
                className="logo"
                alt="Food Villa"
                src={Logo} />
        </Link>
    );
}
const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const cardItems = useSelector(store => store.cart.items);
    console.log(cardItems); 
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/instamart'>Instamart</Link>
                    </li>
                    <li>
                        <Link to="/cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i>{cardItems.length}</Link>
                    </li>
                    
                    <li>
                        {
                        /* { we can run only JS Expressions not statements } */
                        // these two are statements we can't run this 
                        // let a=10;
                        // console.log(a);
                        // we can do like this as expression 
                        // (a=10 , console.log(a))
                            
                        isLoggedIn ? (<button onClick={() => setLoggedIn(false)}>LogOut</button>) : (<button onClick={() => setLoggedIn(true)}>Login</button>)
                    }
                    </li>
                </ul>
            </div>
        </div>

    );
}
export default Header;