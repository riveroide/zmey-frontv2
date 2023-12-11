import axios from "../../axiosConfig";
import { GetAllUsers } from "../../reducers/adminSlice";



export const getAllUsers = () => async (dispatch) => {
  try {
    await axios.get(`/users`).then((res) => {
      dispatch(GetAllUsers(res.data));
    });
  } catch (error) {
    console.log("no hay usuarios");
  }
};
