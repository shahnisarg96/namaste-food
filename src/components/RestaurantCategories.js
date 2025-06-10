import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
    const [showCurrent, setShowCurrent] = useState(showItems);

    const toggleItems = () => {
        setShowIndex();
        setShowCurrent(!showCurrent);
    };

    return (
        <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-lg max-w-lg min-w-lg m-2">
            <span onClick={toggleItems} className="cursor-pointer">
                {data.title} ({data.itemCards.length}){" "}
                {showCurrent ? "▲" : "▼"}
            </span>
            {showItems && showCurrent && <CategoryItemList data={data.itemCards} />}
        </div>
    );
}

export default RestaurantCategories;