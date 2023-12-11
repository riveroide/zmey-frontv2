import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    allOrdersAdmin:[],
    oneOrderAdmin:{}
  },
  reducers: {
    getUserOrders: (state, action) => {
      state.orders = action.payload.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        else if (a.createdAt > b.createdAt) return -1;
        else return 0;
      })
    },
    getAllOrders: (state, action) =>{
      state.allOrdersAdmin = action.payload
    },
    getOneOrderAdmin: (state,action) =>{
      state.oneOrderAdmin = action.payload
    },
    resetOneOrderAdmin: (state) => {
      state.oneOrderAdmin = {};
    },
    updateOrderAdmin: (state,action) => {
      state.oneOrderAdmin = action.payload
    }
  },
});

export const { getUserOrders , getAllOrders ,getOneOrderAdmin, resetOneOrderAdmin, updateOrderAdmin } = ordersSlice.actions;

export default ordersSlice.reducer;
