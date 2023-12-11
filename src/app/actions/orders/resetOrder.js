import { resetOneOrderAdmin } from '../slices/ordersSlice';

export const resetOrderAdmin = () => {
  return (dispatch) => {
    dispatch(resetOneOrderAdmin());
  };
};