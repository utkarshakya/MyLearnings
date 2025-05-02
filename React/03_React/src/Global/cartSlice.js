import {createSlice} from "@reduxjs/toolkit"

const foodSlice = createSlice({
    name: "Slice2",
    initialState: {count: 0},
    reducers: {
        addToCart: (state) => {state.count += 1},
        removeFromCart: (state) => {state.count -= 1}
    }
})

export const {addToCart, removeFromCart} = foodSlice.actions;
export default foodSlice.reducer;