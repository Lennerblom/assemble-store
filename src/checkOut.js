import React, { Component } from 'react';
import { Button, Divider } from '@material-ui/core';


export default class CheckOut extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            cardNumber: Number,
            expMonth: Date,
            expYear: Date,
            cvv: ''
        }
    }
    onChange = (e) => {
        const val =
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
    
      const changedBit = {
        [e.target.name]: val
      };
      this.setState(changedBit);
      }
    
    render() {
        return (
          <div>
              <h2>Check Out</h2>
              <Divider/>
              <div className='form-container'>
                <fieldset className='payment-form'>Payment Information
                <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <label>Name on Card
                  <input name='name' placeholder='Name on Card' type='text' value={this.state.name}/>
                </label>
                <label>Card Number
                  <input name='cardNumber' placeholder='XXXX XXXX XXXX XXXX' type='text' value={this.state.cardNumber}/>
                </label>
                <label>Expiration Date
                  <input name='expMonth' placeholder='MM' type='select' value={this.state.expMonth}/>
                  <input name='expYear' placeholder='YYYY' type='select' value={this.state.expYear}/>
                </label>
                <label>CVV
                  <input name='cvv' placeholder='City' type='text' value={this.state.cvv}/>
                </label>
              </form>
            </fieldset>
            <fieldset className='shipping-form'>Shipping Address
              <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input type='text'/>
              </form>
            </fieldset>
            </div>
            <Divider/>
            <a href='/order-complete'><Button variant="contained" color="primary">PLACE ORDER</Button></a>
          </div>
        );
    }
}