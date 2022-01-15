/*
action.payload should be an item.
item = { id, description, cost, count, isEditing }
}
*/
const itemReducer = (items = [], action) => {

  // If an item is being added, push it to the existing items array
  if (action.type === 'CART_ITEM_ADDED') {
    return [...items, action.payload];
  }

  // If we're toggling editing of an item, find the item by the payload.id, invert its isEditing property and return that item in the map
  if (action.type === 'EDIT_STATE_TOGGLED') {
    return items.map(item => {
      if (item.id === action.payload.id) {
        item.isEditing = !item.isEditing;
        return item;
      }
      return item;
    });
  }

  // If an item is being deleted, return all items via filter() except the one that matches the payload.id
  if (action.type === 'CART_ITEM_DELETED') {
    return items.filter(item => {
      return item.id !== action.payload.id;
    });
  }

  // If an item is being updates, find the item by the payload.id and return the action.payload instead of the existing item
  if (action.type === 'CART_ITEM_UPDATED') {
    return items.map(item => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    });
  }
  return items;
}

export default itemReducer;
