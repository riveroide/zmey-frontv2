import axios from "../../axiosConfig";

export const deleteSizes = (sizeID) => async () => {
    try {
      await axios.delete("/sizes/" + sizeID);
    } catch (error) {
      console.log(error);
    }
  };