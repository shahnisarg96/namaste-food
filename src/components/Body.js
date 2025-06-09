import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantData);

    return (
        <div className="body">
            <div className="filter">
                <h2>Filter</h2>
                <button onClick={() => {
                    const filteredData = restaurantData;
                    setFilteredRestaurants(filteredData);
                }}>ALL</button>
                <button onClick={() => {
                    const filteredData = restaurantData.filter(restaurant => restaurant.info.avgRating > 4.5);
                    setFilteredRestaurants(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resList={[restaurant]} />
                ))}
            </div>
        </div>
    );
}

export default Body;