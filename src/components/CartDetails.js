import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, deleteCartItem } from '../actions';
import '../css/CartDetails.css';

const CartDetails = props => {
  return (
    <div className="cart-details">
      <div className="cart-count"><strong>Total Items:</strong> {props.totalCount}</div>
      <div className="cart-total"><strong>Total Cost: </strong> ${parseFloat(props.totalCost).toFixed(2)}</div>
      <div><button onClick={() => props.addCartItem({
        id: 1,
        description: 'this is a description',
        count: 2,
        cost: 20
      })}>Click</button></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    totalCount: state.totalCount,
    totalCost: state.totalCost
  }
}

export default connect(mapStateToProps, { addCartItem, deleteCartItem })(CartDetails);
