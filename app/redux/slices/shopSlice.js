import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openNavbar: false,
  orderOpen: false,
  categ: {},
  filtered: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changeOpened(state, action) {
      state.openNavbar = !state.openNavbar;
    },
    orderOpen(state, action) {
      state.orderOpen = !state.orderOpen;
    },
    saveCateg(state, action) {
      state.categ = action.payload;
    },
  },
});

export const { changeOpened, orderOpen, saveCateg } = shopSlice.actions;
export default shopSlice.reducer;
