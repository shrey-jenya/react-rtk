import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
const Cart = () => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};
	return (
		<div>
			<h2>cart</h2>
			{
				products.map((product)=>{
					return(
						<div key={product.id}>
                            <img className="productImg" src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <button onClick={()=>handleRemove(product.id)}>Remove</button>
                        </div>
					)
				})
			}
		</div>
	);
};
export default Cart;
