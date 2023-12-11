import axios from "../../axiosConfig";
import { getAllCodes } from "../../reducers/codesSlice";

export const getCodes = () => (dispatch) => {
    try {
        axios.get("/code").then((res) => dispatch(getAllCodes(res.data)));
    } catch (error) {
        return error;
    }
    };



