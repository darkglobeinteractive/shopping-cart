/*
action.payload should be an item.
item = { id, description, cost, count, isEditing }
}
*/
const updateTotalCountReducer = (totalCount = 0, action) => {

  // If an item is being updated, add its count to the totalCount in state
  if (action.type === 'CART_ITEM_UPDATED') {
    return totalCount + parseInt(action.payload.count);
  }

  // 1) If an item is being added, simply add the payload's count to the totalCount in state
  // 2) Also, if we're editing an item, remove its count while editing to make things easy
  if (action.type === 'CART_ITEM_DELETED' || action.type === 'EDIT_STATE_TOGGLED') {
    return totalCount - parseInt(action.payload.count);
  }
  return totalCount;

}

export default updateTotalCountReducer;
