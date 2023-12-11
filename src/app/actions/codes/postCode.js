import axios from '../../axiosConfig'

export const postCode = (code, oneTimeCode) => async () => {
    try {
      await axios.post("/code", {code, oneTimeCode});
    } catch (error) {
      console.log(error);
    }
}