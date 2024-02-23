import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
const Product = () => {
	const dispatch = useDispatch()
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const response = await fetch(`https://fakestoreapi.com/products/`);
		const data = await response.json();
		setLoading(false);
		// console.log(data)
		setProducts(data);
	};
	const handleAdd = (products)=>{
		dispatch(add(products))
	}
	return (
		<>
			<hr />
			<div className="parent">
				{products?.length > 0 &&
					products.map((item) => {
						return (
							<div key={item.id}>
								<img
									className="productImg"
									src={item.image}
									alt=""
								/>
								<h2>{item.title.slice(0,25)} </h2>
								<p>${item.price}</p>
								<button onClick={()=>handleAdd(products)}>Add to Cart</button>
							</div>
						);
					})}
				{/* {products.map((product,id) =>{
				return (
                    <div key={id}>
                        <img className="productImg" src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                )
			} )} */}
			</div>
		</>
	);
};
export default Product;
