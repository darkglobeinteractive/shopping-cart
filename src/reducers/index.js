import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import nextIdReducer from './nextIdReducer';
import updateTotalCostReducer from './updateTotalCostReducer';
import updateTotalCountReducer from './updateTotalCountReducer';

// Export the combined reducers for store creation in /src/index.js
export default combineReducers({
  items: itemReducer,
  nextID: nextIdReducer,
  totalCost: updateTotalCostReducer,
  totalCount: updateTotalCountReducer
});
