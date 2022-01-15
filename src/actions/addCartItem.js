const addCartItem = id => {
  return {
    type: 'CART_ITEM_ADDED',
    payload: {
      id: id,
      description: '',
      count: 0,
      cost: 0,
      isEditing: true
    }
  }
}

export default addCartItem;
