import { authSaga } from 'features/auth/authSaga'
import counterSaga from 'features/counter/counterSaga'
import {all} from 'redux-saga/effects'
function* helloSaga(){
    console.log("hellosaga")
}

export default function* rootSaga(){
    console.log("rootSaga")
    yield all([helloSaga() , counterSaga() , authSaga()])
}