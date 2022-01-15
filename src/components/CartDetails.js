import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, deleteCartItem } from '../actions';
import '../css/CartDetails.css';

const CartDetails = props => {
  return (
    <div className="cart-details">
      <div className="cart-count"><strong>Total Items:</strong> {props.totalCount}</div>
      <div className="cart-total"><strong>Total Cost: </strong> ${parseFloat(props.totalCost).toFixed(2)}</div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    totalCount: state.totalCount,
    totalCost: state.totalCost
  }
}

export default connect(mapStateToProps)(CartDetails);
