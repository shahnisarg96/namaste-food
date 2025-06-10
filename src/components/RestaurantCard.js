
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resList }) => {
    const restaurantData = resList[0];
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg gap-4 ml-2 bg-gray-100 max-w-xs min-w-xs">
            <img className="w-48 h-48 object-cover" src={`${CDN_URL}/${restaurantData.info.cloudinaryImageId}`} alt={restaurantData.info.name} />
            <h2 className="text-lg font-semibold wrap-anywhere">{restaurantData.info.name}</h2>
            <p className="text-sm">Average Rating: {restaurantData.info.avgRating}</p>
            <p className="text-sm">Cuisines: {restaurantData.info.cuisines.join(", ")}</p>
            <p className="text-sm">Cost for Two: {restaurantData.info.costForTwo}</p>
            <p className="text-sm">Delivery Time: {restaurantData.info.sla.deliveryTime} mins</p>
            <p className="text-sm">ID: {restaurantData.info.id}</p>
            {/* <button className="border bg-blue-800 text-white p-2">Add to Cart</button> */}
        </div>
    );
}

export const PromotedRestaurantCard = (props) => {
    return (
        <div className="promoted-restaurant-card border border-yellow-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Open now</h2>
            <RestaurantCard {...props} />
        </div>
    );
}

export default RestaurantCard;