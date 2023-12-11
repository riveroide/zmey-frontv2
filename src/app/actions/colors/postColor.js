import axios from '../../axiosConfig'

export const postColor = (color) => async () => {
    try {
      await axios.post("/colors", color);
    } catch (error) {
      console.log(error);
    }
}