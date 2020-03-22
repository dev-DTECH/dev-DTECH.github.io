import React, { Component } from 'react'
import Product from './Product.js'
export default class ProductsList extends Component {
    constructor(){
        super();
        // console.log(this.props.products)
        
    }
    render() {
        return (<div id="products-container">
        {this.props.products}
            <Product/>
            </div>
        )
    }
}
