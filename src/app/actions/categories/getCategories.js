import axios from "../../axiosConfig";
import {
  getAllCategories,
  getAllColors,
  getAllSizes,
} from "../../reducers/categoriesSlice";

export const getCategories = () => (dispatch) => {
  try {
    axios
      .get("/categories")
      .then((res) => {
        dispatch(getAllCategories(res.data))});
  } catch (error) {
    return error;
  }
};

export const getSizes = () => (dispatch) => {
  try {
    axios.get("/sizes").then((res) => dispatch(getAllSizes(res.data)));
  } catch (error) {
    return error;
  }
};



export const getColors = () => (dispatch) => {
  try {
    axios.get("/colors").then((res) => dispatch(getAllColors(res.data)));
  } catch (error) {
    return error;
  }
};
