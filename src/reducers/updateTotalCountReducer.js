const updateTotalCountReducer = (totalCount = 0, action) => {
  if (action.type === 'CART_ITEM_UPDATED') {
    return totalCount + parseInt(action.payload.count);
  }
    if (action.type === 'CART_ITEM_DELETED') {
      return totalCount - parseInt(action.payload.count);
    }
  return totalCount;
}

export default updateTotalCountReducer;
