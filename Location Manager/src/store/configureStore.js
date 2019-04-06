import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filtersReducer from '../reducers/filters';
import locationReducer from '../reducers/locations';
import bandwidthReducer from '../reducers/bandwidths';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer,
      location: locationReducer,
      bandwidth: bandwidthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
