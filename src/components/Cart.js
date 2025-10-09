import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div  className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">cart</h1>
            <div className="w-6/12 m-auto">
              <button className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleCart}
              > clear cart</button>
              {cartItems.length == 0 && (<h1> cart is empty. Add items to the cart!! </h1>)}
              <ItemList items={cartItems}/>
            </div>
        </div>
    )
};
export default Cart;