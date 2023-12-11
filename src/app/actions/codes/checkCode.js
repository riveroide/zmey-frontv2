import axios from "../../axiosConfig";

export const checkCode = async (code) => {
  try {
    const findCode = await axios.get(`/code/${code}`);
    if (findCode.data.length) return findCode.data[0];
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
