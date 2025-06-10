import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=` + resId);
        const json = await response.json();

        setResInfo(json.data.cards[2].card.card.info);
        setResMenu(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    }

    return { resInfo, resMenu };
};

export default useRestaurantMenu;