const toggleEditing = item => {
  return {
    type: 'EDIT_STATE_TOGGLED',
    payload: item
  }
}

export default toggleEditing;
