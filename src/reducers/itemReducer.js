const itemReducer = (items = [], action) => {
  if (action.type === 'CART_ITEM_ADDED') {
    return [...items, action.payload];
  }
  if (action.type === 'EDIT_STATE_TOGGLED') {
    return items.map(item => {
      if (item.id === action.payload.id) {
        item.isEditing = !item.isEditing;
        return item;
      }
      return item;
    });
  }
  if (action.type === 'CART_ITEM_DELETED') {
    return items.filter(item => {
      return item.id !== action.payload.id;
    });
  }
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
