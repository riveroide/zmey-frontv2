import axios from '../../axiosConfig'

export const deleteProducts = (productID) => async () =>{
    try {
        await axios.delete('/products/'+ productID)
    } catch (error) {
        console.log(error)
    }
}