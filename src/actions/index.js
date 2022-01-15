import addCartItem from './addCartItem';
import deleteCartItem from './deleteCartItem';
import toggleEditing from './toggleEditing';
import updateCartItem from './updateCartItem';

// Export all actions for use throughout the components via connect(state, { actions })(component)
export { addCartItem, deleteCartItem, toggleEditing, updateCartItem };
