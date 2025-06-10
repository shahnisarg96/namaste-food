
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resList }) => {
    const restaurantData = resList[0];
    return (
        <div className="restaurant-card">
            <img src={`${CDN_URL}/${restaurantData.info.cloudinaryImageId}`} alt={restaurantData.info.name} height={200} width={200} />
            <h2>{restaurantData.info.name}</h2>
            <p>Average Rating: {restaurantData.info.avgRating}</p>
            <p>Cuisines: {restaurantData.info.cuisines.join(", ")}</p>
            <p>Cost for Two: {restaurantData.info.costForTwo}</p>
            <p>Delivery Time: {restaurantData.info.sla.deliveryTime} mins</p>
            <p>ID: {restaurantData.info.id}</p>
            <button>Add to Cart</button>
        </div>
    );
}
export default RestaurantCard;