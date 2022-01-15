import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../actions';
import '../css/CartItems.css';
import CartItem from './CartItem';

const CartItems = ({ items, nextID, addCartItem }) => {
  return (
    <div className="cart-items">
      <div className={'cart-item header' + (parseInt(items.length) === 0 ? ' hide' : '')}>
        <div className="cart-item-description">Description</div>
        <div className="cart-item-count">Item Count</div>
        <div className="cart-item-cost">Item Cost</div>
        <div className="cart-item-cost-total">Total Item Cost</div>
        <div className="cart-item-controls">Controls</div>
      </div>
      <div className={'cart-item empty' + (parseInt(items.length) > 0 ? ' hide' : '')}>
        <div className="cart-item-empty" colSpan="5">Click the <strong>Add Item</strong> button below to begin</div>
      </div>
      {
        items.map(item => {
          return (
            <CartItem
              key={item.id}
              item={item}
              isEditing={item.isEditing}
            />
          );
        })
      }
      <div className="add-item-container">
        <button className="add-item" onClick={() => addCartItem(nextID)}>Add Item</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items,
    nextID: state.nextID
  }
}

export default connect(mapStateToProps, { addCartItem })(CartItems);
