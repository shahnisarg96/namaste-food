import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4 p-2">Your Cart</h1>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleClearCart()}>
                Clear Cart
            </button>
            {cartItems.length === 0 && <h2 className="text-xl">Your cart is empty</h2>}
            {cartItems.length > 0 && <h2 className="text-xl mb-4">You have {cartItems.length} items in your cart</h2>}
            {<CategoryItemList data={cartItems} />}
        </div>
    );
}

export default Cart;