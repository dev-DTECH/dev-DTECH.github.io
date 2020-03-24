import React, { Component } from "react";
import Product from "./Product.js";

export default class ProductsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
		this.addNewProduct = this.addNewProduct.bind(this);
	}
	async addNewProduct() {
		this.setState(state => {
			return {
				products: state.products.concat([
					{ id: 1, name: "Some Name" },
					{ id: 1, name: "Some Name" },
					{ id: 1, name: "Some Name" }
				])
			};
		});
	}
	componentDidMount(){
		let options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.01
		};

		let observer = new IntersectionObserver(this.addNewProduct, options);
		
		 observer.observe(document.querySelector("footer"));
	}
	render() {
		return (
			<div id="product-list">
				{this.state.products.map((product, index) => (
					<Product key={index} name={product} data={product} />
				))}
				<footer></footer>
				<h3>Loading...</h3>
			</div>
		);
	}
}
