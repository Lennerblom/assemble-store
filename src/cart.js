import React, { Component } from 'react';

const cart = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]


export default class Cart extends Component {
    render() {
        return (
            <h2>Cart</h2>
            
        );
    }
}