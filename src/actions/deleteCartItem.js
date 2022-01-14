const deleteCartItem = item => {
  return {
    type: 'CART_ITEM_DELETED',
    payload: item
  }
}

export default deleteCartItem;
