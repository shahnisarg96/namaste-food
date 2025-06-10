import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    const [resCategories, setResCategories] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=` + resId);
        const json = await response.json();

        setResInfo(json.data.cards[2].card.card.info);
        const resCategories = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setResCategories(resCategories);
    }

    return { resInfo, resCategories };
};

export default useRestaurantMenu;