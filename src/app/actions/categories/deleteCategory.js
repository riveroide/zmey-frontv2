import axios from "../../axiosConfig";
import { getCategories } from "./getCategories";

export const deleteCategory = (categoryID) => async (dispatch) => {
  try {
    await axios.delete("/categories/" + categoryID);
    
  } catch (error) {
    console.log(error);
  }
};