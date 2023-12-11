import { getAllRegisteredEmails } from "../../reducers/codesSlice";
import axios from "../../axiosConfig";

export const getAllRegisteredEmailsAction = () => async (dispatch) => {
  const emails = await axios.get("/newsletter");
  dispatch(getAllRegisteredEmails(emails.data));
};
