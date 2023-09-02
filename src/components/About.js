import {Outlet} from 'react-router-dom';
import Profile from './ProfileClass';

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is Namaste react series</p>
            <Profile name={ "Priyanshi "} />
            {/* <Outlet/> */}
        </div>
    )
}

export default About