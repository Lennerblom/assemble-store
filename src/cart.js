import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const cart = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]


export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: true,
        }
    }

    handleClick = () => {

    }
    render() {
        return (
            <div>
              <ul className='cart-table-head'>
                <li className='your-cart'>Your Cart</li>
                <li className='qty-price'>Quantity</li>
                <li className='qty-price'>Price</li>
              </ul>
            <Divider/>
            <a href='/checkOut'><Button onClick={this.handleClick} variant="contained" color="primary">CHECK OUT</Button></a>
            </div>
            
        );
    }
}