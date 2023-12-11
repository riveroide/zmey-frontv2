import axios from '../../axiosConfig'

export const postNewsletter = (email, code) => async () => {
    try {
      await axios.post("/newsletter", {email, code});
    } catch (error) {
      console.log(error);
    }
}