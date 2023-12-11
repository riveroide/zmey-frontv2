import axios from "../../axiosConfig";

export const deleteCode = (codeID) => async (dispatch) => {
  try {
    await axios.delete("/code/" + codeID);
  } catch (error) {
    console.log(error);
  }
};