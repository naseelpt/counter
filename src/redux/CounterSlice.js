import { createSlice } from "@reduxjs/toolkit";




export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
     increment : (state)=>{
      state.value+=1
     },
     decrement : (state)=>{
     state.value-=1
     },
     reset : (state)=>{
      state.value=0
     },
     changeRange :(state,action)=>{
      state.value+=action.payload
     }
    }
})


// actions need ato component
export const {increment,decrement,reset,changeRange} = counterSlice.actions

// reducer are need to update state
export default counterSlice.reducer