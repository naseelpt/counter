import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./CounterSlice";




export const store = configureStore({
    reducer:{
        // counter is name of reducer to update state
        counter:counterSlice
    }
})