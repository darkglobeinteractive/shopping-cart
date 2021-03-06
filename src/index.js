import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

/* Set initial state for testing purposes ----------------------- */
// const defaultState = {
//   items: [
//     {
//     id: 1,
//     description: 'Bucket of crow eggs',
//     count: 32,
//     cost: 5.1,
//     isEditing: false
//     },
//     {
//       id: 2,
//       description: 'Fight Milk (case)',
//       count: 3,
//       cost: 32,
//       isEditing: false
//     }
//   ],
//   totalCost: 259.2,
//   totalCount: 35
// };
// const store = createStore(reducers, {
//   items: defaultState.items,
//   totalCost: defaultState.totalCost,
//   totalCount: defaultState.totalCount
// });

// The following allows Redux DevTools to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store using the combined reducers
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// Wrap the parent <App /> component with <Provider store={store} /> to grant access to state in child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
