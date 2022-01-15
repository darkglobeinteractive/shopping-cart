/*
The "Add Item" in the /src/components/CartItems.js component triggers this action, creating a new item using the nextID value in state
*/
const addCartItem = nextID => {
  return {
    type: 'CART_ITEM_ADDED',
    payload: {
      id: nextID,
      description: '',
      count: 0,
      cost: 0,
      isEditing: true
    }
  }
}

export default addCartItem;
