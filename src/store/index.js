import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import trackReducer from './reducers/trackReducer';

const rootReducer = combineReducers({
  track: trackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
