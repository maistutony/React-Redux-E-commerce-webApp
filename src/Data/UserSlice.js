import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    // The authenticated user object
  },
  reducers: {
    // Reducer for setting the authenticated user
    setUser: (state, action) => {
      const { email } = action.payload;
      if (state.user === null) {
        state.user = [action.payload];
      } else {
        state.user.forEach((item) => {
          if (item.email === email) {
            console.log("user already exists");
            return;
          }
          state.user = state.user.push(action.payload);
          return;
        });
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.user === null) {
        console.log("user not registered");
      } else {
        state.user.forEach((item) => {
          if (item.email !== email || item.password !== password) {
            console.log("invalid user information");
            return;
          } else {
            state.isLoggedIn = true;
          }
        });
      }
    },
    setisLoggeIn: (state,action) => {
      state.isLoggedIn = action.payload;
    },
    // Reducer for clearing user state (logout)
    clearUser: (state) => {
      state.user = null;
    },
  },
});
export const {
  setUser,
    clearUser,
  loginUser,
  setisLoggeIn
} = userSlice.actions;

export default userSlice.reducer;
