import createSagaMiddleware from '@redux-saga/core';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
