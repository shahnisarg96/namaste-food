import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, resMenu } = useRestaurantMenu(resId);

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
            <p className="text-sm">Welcome to our restaurant! Here is our menu:</p>
            <ul className="menu-list list-disc pl-5 mt-4">
                {resMenu.map((item) => (
                    <li key={item.card.info.id} className="text-sm">{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;