import axios from "../../axiosConfig";

export const deleteColor = (colorID) => async () => {
  try {
    await axios.delete("/colors/" + colorID);
  } catch (error) {
    console.log(error);
  }
};
