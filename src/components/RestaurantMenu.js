import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [resMenu, setResMenu] = useState([]);

    const { resId } = useParams();
    
    useEffect(() => {   
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=` + resId);
        const json = await response.json();

        setResInfo(json.data.cards[2].card.card.info);
        setResMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
    }

    if (!resInfo || resInfo.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="restaurant-menu">
            <h1>Restaurant Menu: {resInfo.name}</h1>
            <p>Welcome to our restaurant! Here is our menu:</p>
            <ul>
                {resMenu.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;