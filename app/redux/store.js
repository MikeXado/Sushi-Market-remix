import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./slices/shopSlice";

const store = createStore(rootReducer, composeWithDevTools());
export default store;
