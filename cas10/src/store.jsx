import {configureStore} from '@reduxjs/toolkit'; //kreiranje na prodavnica/store
import logger from 'redux-logger' //fiskalna kasa
import SayHelloReducer from'./reducers/SayHelloReducer' //vraboteniot

const reducer = {
    // spisok na vraboteni
    SayHelloReducer: SayHelloReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
