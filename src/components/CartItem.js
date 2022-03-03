import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteCartItem, toggleEditing, updateCartItem } from '../actions';
import '../css/CartItem.css';

// Redux is not being used for state in this item because it's more efficient to send the item's data as props from CartItems.js via the items.map() function
// For ease, we name the item variable, but have to name the rest after that so the named actions work without props
const CartItem = ({ item, deleteCartItem, toggleEditing, updateCartItem }) => {

  // Create some "local state" for use in this instance of <CartItem />
  // Not sure if this is the way to do it or not, but it works
  // Also set id and isEditing for ease in the code
  const id = item.id;
  const isEditing = item.isEditing;
  const [description, setDescription] = useState(item.description);
  const [count, setCount] = useState(item.count);
  const [cost, setCost] = useState(item.cost);

  return (
    <div id={'cart-item-'} className={'cart-item' + (isEditing ? ' editing' : '')}>
      <div className="cart-item-description">
        <div className="value">{description}</div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
        <div className="cart-item-count">
          <div className="value">{count}</div>
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <div className="cart-item-cost">
          <div className="value">${parseFloat(cost).toFixed(2)}</div>
          <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div className="cart-item-cost-total">${ parseFloat(cost * count).toFixed(2)}</div>
        <div className="cart-item-controls">
          <button className="edit" onClick={() => toggleEditing(item)}>Edit</button>
          <button className="update" onClick={() => updateCartItem({
            id: id,
            description: description,
            count: count,
            cost: cost
          })}>Save</button>
          <button className="delete" onClick={() => deleteCartItem(item)}>Delete</button>
        </div>
      </div>
  );
}

// We don't need to map state here, so the first argument in connect() is null
// After that, we map the actions as an object and pass it to connect() for use in the buttons above
export default connect(null, { deleteCartItem, toggleEditing, updateCartItem })(CartItem);
