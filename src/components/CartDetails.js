import React from 'react';
import { connect } from 'react-redux';
import '../css/CartDetails.css';

const CartDetails = props => {
  return (
    <div className="cart-details">
      <div className="cart-count"><strong>Total Items:</strong> {props.totalCount}</div>
      <div className="cart-total"><strong>Total Cost: </strong> ${parseFloat(props.totalCost).toFixed(2)}</div>
    </div>
  );
}

// All I need are a couple of values from state
const mapStateToProps = state => {
  return {
    totalCount: state.totalCount,
    totalCost: state.totalCost
  }
}

// Connect the state values above via mapStateToProps
export default connect(mapStateToProps)(CartDetails);
