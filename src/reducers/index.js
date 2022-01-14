import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import nextIdReducer from './nextIdReducer';
import updateTotalCostReducer from './updateTotalCostReducer';
import updateTotalCountReducer from './updateTotalCountReducer';

export default combineReducers({
  items: itemReducer,
  nextID: nextIdReducer,
  totalCost: updateTotalCostReducer,
  totalCount: updateTotalCountReducer
});
