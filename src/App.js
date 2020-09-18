import React from "react";
import {  Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Cart from "../src/components/Cart"
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
          <div className="grid-container">
            <header>
              <Link to="/">Shopping Cart</Link>
              <Link to="/cart">Cart Items :  {this.props.cartItems.length}</Link>
            </header>
            <main>
              <Route path="/cart" component={Cart} />
              <Route path="/" component={HomeScreen} exact />
            </main>
          </div>
    );
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems
}),null)(App);