import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dispatchDataSlice from '../reducer/dispatchSlice';

const rootReducer = combineReducers({
  dispatchData: dispatchDataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
