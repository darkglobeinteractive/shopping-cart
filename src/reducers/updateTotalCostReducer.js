/*
action.payload should be an item.
item = { id, description, cost, count, isEditing }
}
*/
const updateTotalCostReducer = (totalCost = 0, action) => {

  // If an item is being updated, add its total to the totalCost in state
  if (action.type === 'CART_ITEM_UPDATED') {
    return totalCost + (action.payload.count * action.payload.cost);
  }

  // 1) If an item is being added, simply remove the payload's total cost from the totalCost in state
  // 2) Also, if we're editing an item, remove its cost while editing to make things easy
  if (action.type === 'CART_ITEM_DELETED' || action.type === 'EDIT_STATE_TOGGLED') {
    return totalCost - (action.payload.count * action.payload.cost);
  }
  return totalCost;

}

export default updateTotalCostReducer;
