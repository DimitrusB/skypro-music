import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/trackReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;