const updateTotalCostReducer = (totalCost = 0, action) => {
  if (action.type === 'CART_ITEM_UPDATED') {
    return totalCost + (action.payload.count * action.payload.cost);
  }
  if (action.type === 'CART_ITEM_DELETED') {
    return totalCost - (action.payload.count * action.payload.cost);
  }
  return totalCost;
}

export default updateTotalCostReducer;
