import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
// import restaurantData from "../utils/mockData";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(url);
            const responseJson = await response.json();
            const restaurantData = responseJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            setRestaurantData(restaurantData);
            setFilteredData(restaurantData);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }

    return restaurantData.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <h2>Filter</h2>
                <button onClick={() => {
                    setFilteredData(restaurantData);
                }}>ALL</button>
                <button onClick={() => {
                    const filteredData = restaurantData.filter(restaurant => restaurant.info.avgRating >= 4.5);
                    setFilteredData(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} />
                <button
                    onClick={() => {
                        const filter = restaurantData.filter(restaurant =>
                            restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
                        );
                        setFilteredData(filter);
                    }}
                >Search</button>
            </div>
            <div className="res-container">
                {filteredData.map((restaurant) => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                        <RestaurantCard resList={[restaurant]} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;