
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        //reducer functions
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }

    }
})

export const {addItem,removeItem,clearCart} = cardSlice.actions;

export default cardSlice.reducer;