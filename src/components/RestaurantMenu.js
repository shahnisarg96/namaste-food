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