import { useState } from 'react';
import contact from '../assets/img/Contact-Us.png'
const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact-container">
            <div className="contact-left">
                <img src={ contact } alt='Contact Us'/>
            </div>
            <div className='contact-right'>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' required />
                    <input type='text' placeholder='Email' required />
                    <textarea placeholder='Type your message here...' required/>
                    <button type='submit'>Submit</button>
                    {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;