import axios from "../../axiosConfig";

export const postSubscriber = (input) => async()=>{
    try {
        await axios.post('/subscribe',{
        email: input
    })
    } catch (error) {
        console.log(error)
    }
    
}