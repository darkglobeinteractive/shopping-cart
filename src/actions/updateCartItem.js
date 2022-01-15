const updateCartItem = info => {
  return {
    type: 'CART_ITEM_UPDATED',
    payload: {
      id: info.id,
      description: info.description,
      count: info.count,
      cost: info.cost
    }
  }
}

export default updateCartItem;
