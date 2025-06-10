import { IMAGE_PLACEHOLDER } from '../utils/constants';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        console.log("Header component mounted");
        return () => {
            console.log("Header component unmounted");
        };
    }, []);

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="logo-container">
                <img className="w-20" src={`${IMAGE_PLACEHOLDER}`} alt="Logo" />
            </div>
            <div className="flex justify-between">
                <ul className='flex space-x-4'>
                    <li className='text-green-300'>Status: {onlineStatus ? "Online" : "Offline"}</li>
                    <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
                    <li className='hover:text-blue-500'><Link to="/about">About</Link></li>
                    <li className='hover:text-blue-500'><Link to="/contact">Contact</Link></li>
                    <li className='hover:text-blue-500'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-4 font-bold'>User: {loggedInUser}</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;