import React, { Component } from 'react';

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
    render() {
        return (
          <div>
            <fieldset>Payment Information
              <form>
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
            <fieldset>Shopping Address
              <form>
                <input type='text'/>
              </form>
            </fieldset>
          </div>
        );
    }
}