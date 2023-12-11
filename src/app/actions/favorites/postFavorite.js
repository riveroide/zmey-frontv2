import axios from "../../axiosConfig";

export const postFavorite = (favorite) => async () => {
  try {
    await axios.post("/favorites", favorite);
  } catch (error) {
    console.log(error);
  }
};
