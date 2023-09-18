import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import trackReducer from './reducers/trackReducer';

const rootReducer = {
  track: trackReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
