import { CDN_URL } from "../utils/constants";

const CategoryItemList = (props) => {
    const { data } = props;
    return (
        <>
            {data && data.map((item) => (
                <div key={item.card.info.id} className="flex flex-wrap border rounded-lg shadow-lg gap-4 p-2 ml-2 bg-gray-100 max-w-md min-w-md">
                    <div className="w-8/12 p-4 items-start py-2">
                        <h2 className="text-lg font-semibold wrap-anywhere">{item.card.info.name}</h2>
                        <p className="text-sm">Price: ₹{item.card.info.price / 100}</p>
                        {/* <p className="text-sm">Description: {item.card.info.description}</p> */}
                        <button className="border bg-blue-800 text-white p-2">Add to Cart</button>
                    </div>
                    <div className="w-3/12 p-4">
                        <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="w-20 h-20 object-cover rounded-t-md m-2" />
                    </div>
                </div>
            ))}
        </>
    );
}

export default CategoryItemList;