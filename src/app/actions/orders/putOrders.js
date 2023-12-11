import axios from "../../axiosConfig";
import { updateOrderAdmin } from "../../reducers/ordersSlice";

export const modifyOrder = (order) => async (dispatch) => {
  try {
    const response = await axios.put(`orders/${order.id}`, order);
    dispatch(updateOrderAdmin(response.data))
  } catch (error) {
    console.log(error);
  }
};