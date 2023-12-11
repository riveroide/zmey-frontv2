import axios from '../../axiosConfig'

export const postCategory = (category) => async () => {
    try {
      await axios.post("/categories", category);
    } catch (error) {
      console.log(error);
    }
}