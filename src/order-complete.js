import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

export default class OrderComplete extends Component {
    render() {
        return (
            <div>
                <h2>Order Complete</h2>
                <Divider/>
            <p>Hooray! Way to order those products.</p>
            <a href='/'><Button variant="contained" color="primary">GO HOME</Button></a>
            </div>
        );
    }
}