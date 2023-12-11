import axios from "../../axiosConfig";
import { getAllOrders, getOneOrderAdmin, getUserOrders } from "../../reducers/ordersSlice";

export const getOrders = (userID) => async (dispatch) => {
  const orders = await axios.get(`/orders/user/${userID}`);
  dispatch(getUserOrders(orders.data));
};

export const getAdminOrders = () => async (dispatch) => {
  const orders = await axios.get(`/orders`);
  dispatch(getAllOrders(orders.data));
};

export const getOrdersByID = (ID) => async (dispatch) => {
  try {
    const response = await axios.get(`/orders/${ID}`);
    const order = response.data;
    dispatch(getOneOrderAdmin(order));
  } catch (error) {
    console.error(error);
  }
}