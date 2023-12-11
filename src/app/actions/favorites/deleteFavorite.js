import axios from "../../axiosConfig";

export const deleteFavorite = (favoriteID) => async () => {
  try {
    await axios.delete("/favorites/" + favoriteID);
  } catch (error) {
    console.log(error);
  }
};
