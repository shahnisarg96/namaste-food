import { IMAGE_PLACEHOLDER } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("Header component mounted");
        return () => {
            console.log("Header component unmounted");
        };
    }, []);

    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={`${IMAGE_PLACEHOLDER}`} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Status: {onlineStatus ? "Online" : "Offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-button"
                        onClick={() => {
                            setBtnName(btnName === "Login" ? "Logout" : "Login");
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </header>
    );
}

export default Header;