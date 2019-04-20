import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './cart';
import CheckOut from './checkOut';
import OrderComplete from './order-complete';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='header'><p className='header-name'>Assemble Store</p></div>
              <BrowserRouter>
                    <Route exact path={'/'} component={Cart}/>
                    <Route exact path={'/checkOut'} component={CheckOut}/>
                    <Route exact path={'/order-complete'} component={OrderComplete}/>
              </BrowserRouter>
      </div>
    );
  }
}

export default App;
