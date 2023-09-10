import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cart",
    // initially cart is empty so items have empty array 
    initialState: {
        items:[],
    },
    reducers: {
        // this is reducers
        // addItem is dispatching action which calls reducer function 
        // action is the data which is pushed , state first is initialState which is empty array of "items:[]"  after some itmes added it behave as previos state 
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

export const { addItem , removeItem , clearCart } = cardSlice.actions;
export default cardSlice.reducer;