import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import CakeReducer from './reducers/CakeReducer';
import CommentsReducer from './reducers/CommentsReducer'
import ProductReducer from './reducers/ProductReducer';

const reducer={
    CakeReducer:CakeReducer,
    CommentsReducer:CommentsReducer,
    ProductReducer: ProductReducer
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})