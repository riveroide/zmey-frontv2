import { getAllFavorites, getOneFavorite } from "../../reducers/favoritesSlice";
import axios from "../../axiosConfig";

export const getFavorites = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`/favorites/userFavorites/${userID}`);
    const favorites = res.data;
    dispatch(getAllFavorites(favorites));
  } catch (error) {
    return error;
  }
};

export const getFavorite = (userID, productID) => async (dispatch) => {
  try {
    await axios
      .get(`/favorites?userID=${userID}&productID=${productID}`)
      .then((res) => {
        if (res.data) {
          dispatch(getOneFavorite(res.data));
        } else {
          dispatch(getOneFavorite(false));
        }
      });
  } catch (error) {
    return error;
  }
};
