import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories.js";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, resCategories } = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (!resInfo || resInfo.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="restaurant-menu-container flex flex-col items-center p-4">
            <div className="restaurant-info flex flex-col items-center mb-4">
                <h2 className="text-2xl font-bold">{resInfo.name}</h2>
                <p className="text-sm text-gray-600">{resInfo.cuisines.join(", ")}</p>
                <p className="text-sm text-gray-600">Rating: {resInfo.avgRating} stars</p>
            </div>
            <h1 className="text-xl font-semibold">Restaurant Menu: {resInfo.name}</h1>
            {resCategories.map((category, index) => (
                <RestaurantCategories key={category.card.card.categoryId} data={category.card.card} showItems={index === showIndex} setShowIndex={() => setShowIndex(index)} />
            ))}
        </div>
    );
}

export default RestaurantMenu;