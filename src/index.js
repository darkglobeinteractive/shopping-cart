import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

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
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
