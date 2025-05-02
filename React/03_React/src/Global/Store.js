import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import foodCartCounter from "./cartSlice";

const Store = configureStore({
    reducer: {
        counter: counterReducer,
        Slice2: foodCartCounter
    }
})

export default Store;