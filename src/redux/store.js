import {configureStore} from "@reduxjs/toolkit";
import todoReducer, { hideTodo } from './slice/todos'
export const store = configureStore({
    reducer:{
        todo: todoReducer,   
    }
});