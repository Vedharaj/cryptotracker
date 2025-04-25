import {configureStore} from '@reduxjs/toolkit';
import cryptoReducer from './features/cryptoSlicer';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});