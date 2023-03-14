import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    console.log(payload);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'abv',
      })
    );
  } catch (error : any) {
    yield put(authActions.loginFailed(error['message']));
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token');
  yield put(authActions.logout);
}

function* watchLoginFlow() {
  while (true) {
    const isLogged = Boolean(localStorage.getItem('access_token'));
    if (!isLogged) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
