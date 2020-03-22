import React, { Component } from "react";
import ProductsList from './components/ProductsList.js'
// import './script.js'

export default class Search_result extends Component {
	constructor() {
		super();
		this.state={
            products:["pdt 1","pdt 2"]
        }
        this.setproducts=this.
	}
    
    AddProduct(){
        
 
    }
	render() {
		let baseurl =
			"https://shopping-backend-sparkjava.herokuapp.com/api/getMoreProducts";
		function loadproducts() {
			let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", baseurl, true);
            xmlhttp.onreadystatechange=()=>{
                if(xmlhttp.readyState===4 && xmlhttp.status===200){
                    let products=JSON.parse(xmlhttp.responseText);
                    // console.log(products);
                }
            }
        }
        loadproducts();
        // for(let i=0;i<100;i++){
        //     this.getNewProducts()
        // }
		// let ele = document.querySelector("body");
		// // this.getNewProducts();
		// console.log(ele.scrollTop);
		// if (ele.scrollTop < ele.height) this.getNewProducts();

		return <div >
        <button onClick={this.AddProduct}>add product</button>

        <ProductsList products={this.products} />


        </div>;
	}
}
