import {loginStart, loginSuccess, loginFailed} from '../../reducers/userSlice'
import axios from '../../axiosConfig';

//FindOrCreate User to Login

export const getUser = (user) => async(dispatch)=>{
    dispatch(loginStart());
    try {
        await axios.get('/users/byemail/'+ user.email)
        .then((res)=>{
            dispatch(loginSuccess(res.data))})
    } catch (error) {
        axios.post('/users/register',{
        name: user.name,
        picture: user.picture,
        email: user.email
    })
    .then((res)=>{
        dispatch(loginSuccess(res.data))
    })
    }
    
}

export const clearUser = ()=> (dispatch) =>{
    dispatch(loginSuccess(null))
}