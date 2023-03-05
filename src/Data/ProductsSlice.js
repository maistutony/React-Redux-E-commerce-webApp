import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// First, create the thunk
 export const getProducts = createAsyncThunk(
  'getAllProducts',
  async (payload,thunkAPI) => {
    try{
      const response = await axios.get("https://dummyjson.com/products?limit=16")
      thunkAPI.dispatch(getProducts.fulfilled(response.data));
      //console.log(response.data)
      return response.data
  }catch(error){
    thunkAPI.dispatch(getProducts.rejected(error.message));
  }
  }
)
const initialState = {
  products: [],
  loading: false,
}

// Then, handle actions in your reducers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    addProduct: (state, action) => {
      console.log(action.payload)
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
    // Add reducers for additional action types here, and handle loading state as needed
    .addCase(getProducts.pending, () => {
      // Optional: update state while fetching
    })
    .addCase(getProducts.fulfilled, (state,action) => {
           state.products=action.payload.products;
    })
    .addCase(getProducts.rejected, (action) => {
     console.log(action.payload)
      // Optional: handle error
    });
  },
})
// Later, dispatch the thunk as needed in the app
export const {addProduct} =productsSlice.actions
export default  productsSlice.reducer