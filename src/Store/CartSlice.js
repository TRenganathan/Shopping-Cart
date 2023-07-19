import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 
 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Add(state,action) {
            state.push(action.payload)
        },
        Remove(state,action){
            return state.filter(item => item.product.id != action.payload)
        }
    }
 })
export const {Add,Remove} = cartSlice.actions
export default cartSlice.reducer;