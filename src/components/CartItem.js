import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteCartItem, toggleEditing, updateCartItem } from '../actions';
import '../css/CartItem.css';

const CartItem = props => {

  const [description, setDescription] = useState(props.item.description);
  const [count, setCount] = useState(props.item.count);
  const [cost, setCost] = useState(props.item.cost);

  return (
    <div id={'cart-item-'} className={'cart-item' + (props.item.isEditing ? ' editing' : '')}>
      <div className="cart-item-description">
        <div className="value">{props.item.description}</div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
        <div className="cart-item-count">
          <div className="value">{props.item.count}</div>
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <div className="cart-item-cost">
          <div className="value">${parseInt(props.item.cost).toFixed(2)}</div>
          <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div className="cart-item-cost-total">${ parseInt(props.item.cost * props.item.count).toFixed(2)}</div>
        <div className="cart-item-controls">
          <button className="edit" onClick={() => props.toggleEditing(props.item)}>Edit</button>
          <button className="update" onClick={() => props.updateCartItem({
            id: props.item.id,
            description: description,
            count: count,
            cost: cost
          })}>Save</button>
          <button className="delete" onClick={() => props.deleteCartItem(props.item)}>Delete</button>
        </div>
      </div>
  );
}

export default connect(null, { deleteCartItem, toggleEditing, updateCartItem })(CartItem);
