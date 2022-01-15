/*
This simply keeps track of a number that will always be new for use as an actual item ID
1) /src/components/CartItems.js has the "Add Item" button
2) When "Add Item" is clicked, /src/action/addCartItem.js is called being sent the current nextID from state
3) The new item is created using that nextID value
4) This reducer is triggered as well, increasing nextID for use in the next item that's added
*/
export default (nextID = 0, action) => {
  if (action.type === 'CART_ITEM_ADDED') {
    return nextID + 1;
  }
  return nextID;
}
