import axios from '../../axiosConfig'

export const postProductCollection = (productCollection) => async () => {
    try {
      await axios.post("/productCollections", productCollection);
    } catch (error) {
      console.log(error);
    }
}