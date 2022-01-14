import React from 'react';
import { connect } from 'react-redux';
import { deleteCartItem, toggleEditing } from '../actions';
import '../css/CartItem.css';

const CartItem = props => {
  return (
    <div id={'cart-item-'} className={'cart-item' + (props.item.isEditing ? ' editing' : '')}>
      <div className="cart-item-description">
        <div className="value">{props.item.description}</div>
        <input type="text" defaultValue={props.item.description} />
      </div>
        <div className="cart-item-count">
          <div className="value">{props.item.count}</div>
          <input type="text" defaultValue={props.item.count} />
        </div>
        <div className="cart-item-cost">
          <div className="value">${(props.item.cost).toFixed(2)}</div>
          <input type="text" defaultValue={props.item.cost} />
        </div>
        <div className="cart-item-cost-total">${ (props.item.cost * props.item.count).toFixed(2)}</div>
        <div className="cart-item-controls">
          <button className="edit" onClick={() => props.toggleEditing(props.item)}>Edit</button>
          <button className="update">Save</button>
          <button className="delete" onClick={() => props.deleteCartItem(props.item)}>Delete</button>
        </div>
      </div>
  );
}

export default connect(null, { deleteCartItem, toggleEditing })(CartItem);
