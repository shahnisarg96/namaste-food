import { IMAGE_PLACEHOLDER } from '../utils/constants';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={`${IMAGE_PLACEHOLDER}`} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#services">Cart</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;