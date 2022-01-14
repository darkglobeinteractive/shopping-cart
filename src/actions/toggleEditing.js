const toggleEditing = id => {
  return {
    type: 'EDIT_STATE_TOGGLED',
    payload: id
  }
}

export default toggleEditing;
