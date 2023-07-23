import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    contents:[],
    isLoading: false,
    error: null,
}
export const fetchContent = createAsyncThunk(
    'contents/fetchContent',
    async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const datas = await res.json();
      return datas
    },
    
)

//   const putData = axios.put('https://fakestoreapi.com/products/1',{
//     'quantity': 1
//   })
//   .then(res=> console.log(res))
//   .catch(er=> console.log(er))
// console.log(putData)
const productSlice = createSlice({
    name: 'contents',
    initialState,
    // extraReducers:{
    //     [fetchContent.pending]: (state,action) => {
    //         state.isLoading = true
    //     },
    //     [fetchContent.fulfilled]: (state,action) => {
    //         state.isLoading = false;
    //         state.contents = action.payload
    //     },
    //     [fetchContent.rejected]: (state,action) => {
    //         state.isLoading = false
    //     }
    // },
    extraReducers:(builder) => {
        builder.addCase(fetchContent.pending, (state)=> {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state,action)=> {
          state.contents = action.payload
          state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state)=> {
          state.error = "Something went wrong! Try again Later";
          state.isLoading = false
        })
    }
})
export default productSlice.reducer

