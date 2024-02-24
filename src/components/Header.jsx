import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<ul>
				<Link to='/'>Home</Link>
				<Link to='cart'>Cart</Link>
				<span>
					cart Items : 0
				</span>
			</ul>
		</div>
	);
};

export default Header;
