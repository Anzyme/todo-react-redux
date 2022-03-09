import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice';

export default configureStore({
    reducer: {
        todos: TodoReducer
    },
});