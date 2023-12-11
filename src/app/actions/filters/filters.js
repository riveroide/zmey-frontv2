import {
  setCategory,
  setColor,
  setSize,
  setGender,
} from "../../reducers/filterSlice";

export const modifyCategory =
  (category = "All") =>
  (dispatch) => {
    dispatch(setCategory(category));
  };

export const modifySize =
  (size = "All") =>
  (dispatch) => {
    dispatch(setSize(size));
  };

export const modifyColor =
  (color = "All") =>
  (dispatch) => {
    dispatch(setColor(color));
  };

export const modifyGender =
  (gender = "All") =>
  (dispatch) => {
    dispatch(setGender(gender));
  };
