import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const exists = state.cartProducts.find((item) => item.id === id);
      if (exists) {
        state.cartProducts = state.cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload)
      state.cartProducts = state.cartProducts.filter((item)=>item.id!==action.payload);
    
    },
    increaseQuantity: (state,action) => {
       const product=state.cartProducts.find((item)=>item.id===action.payload)
       product.quantity+=1
    },
    decreaseQuantity:(state,action)=>{
      const product=state.cartProducts.find((item)=>item.id===action.payload)
      if(product.quantity===2){
        product.quantity=1
      }
      product.quantity-=1
    },
  },
});

export const { addToCart, removeFromCart, clearCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
