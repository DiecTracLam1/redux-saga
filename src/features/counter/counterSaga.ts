import {takeEvery , delay , put} from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function log(action : PayloadAction){
//     console.log('log' , action)
// }


function* handleIncrementSaga(action : PayloadAction<number>){
    console.log("avcah")
    yield delay(2000)
    yield put(incrementSagaSuccess(action.payload))

} 
export default function* counterSaga(){
    console.log("counterSaga");
    yield takeEvery(incrementSaga.toString() ,handleIncrementSaga);
}