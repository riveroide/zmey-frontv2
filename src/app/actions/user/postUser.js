import axios from "../../axiosConfig";
import { loginStart, loginSuccess } from "../../reducers/userSlice";

export const postUser = (user) => async(dispatch)=>{
    dispatch(loginStart())
    try {
        await axios.post('/users/register',{
        name: user.name,
        picture: user.picture,
        email: user.email
    })
    .then((res)=>{
        dispatch(loginSuccess(res.data))
    })
    } catch (error) {
        console.log(error)
    }
    
}