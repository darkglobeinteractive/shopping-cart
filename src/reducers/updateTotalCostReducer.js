const updateTotalCostReducer = (totalCost = 0, action) => {
  if (action.type === 'CART_ITEM_ADDED') {
    return totalCost + (action.payload.count * action.payload.cost);
  }
  return totalCost;
}

export default updateTotalCostReducer;
