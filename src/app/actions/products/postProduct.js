import axios from "../../axiosConfig";

export const postProduct = (product) => async () => {
  try {
    await axios.post("/products", product);
  } catch (error) {
    console.log(error);
  }
};