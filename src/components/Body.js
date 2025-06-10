import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
// import restaurantData from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const onlineStatus = useOnlineStatus();

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

    if (!onlineStatus) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }

    return restaurantData.length === 0 ? <Shimmer /> : (
        <div className="body flex flex-col items-center">
            <div className="flex items-center p-4 bg-gray-200 m-4">
                <h2 className="text-lg font-semibold">Filter</h2>
                <button className="ml-2 border bg-blue-800 text-white p-2" onClick={() => {
                    setFilteredData(restaurantData);
                }}>ALL</button>
                <button className="ml-2 p-2 border bg-blue-800 text-white" onClick={() => {
                    const filteredData = restaurantData.filter(restaurant => restaurant.info.avgRating >= 4.5);
                    setFilteredData(filteredData);
                }}>Top Rated</button>
            </div>
            <div className="flex items-center p-4 bg-gray-200 m-4">
                <input className="border p-2" type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} />
                <button
                    className="border bg-blue-800 text-white p-2 ml-2"
                    onClick={() => {
                        const filter = restaurantData.filter(restaurant =>
                            restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
                        );
                        setFilteredData(filter);
                    }}
                >Search</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4">
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