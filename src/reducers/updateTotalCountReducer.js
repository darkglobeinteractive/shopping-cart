const updateTotalCountReducer = (totalCount = 0, action) => {
  if (action.type === 'CART_ITEM_ADDED') {
    return totalCount + action.payload.count;
  }
  return totalCount;
}

export default updateTotalCountReducer;
