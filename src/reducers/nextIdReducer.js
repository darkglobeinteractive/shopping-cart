export default (nextID = 3, action) => {
  if (action.type === 'CART_ITEM_ADDED') {
    return nextID + 1;
  }
  return nextID;
}
