import { IMAGE_PLACEHOLDER } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Cart</Link></li>
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