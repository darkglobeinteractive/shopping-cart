import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../actions';
import '../css/CartItems.css';
import CartItem from './CartItem';

const CartItems = props => {
  return (
    <div className="cart-items">
      {
        props.items.map(item => {
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
        <button className="add-item" onClick={() => props.addCartItem(props.nextID)}>Add Item</button>
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
