import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <span><i className="fa-solid fa-copyright"></i></span> Copyright 2023 
            Created By &nbsp;
            <Link target='_blank' to="https://www.linkedin.com/in/priyanshi-agrawal-a3402a237/">
                Priyanshi Agrawal
            </Link>

        </div>
    );
};

export default Footer;