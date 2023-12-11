import React, { useEffect, useState } from 'react'
import EditProduct from '../components/AdminDashboard/Products/EditProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductByID } from '../app/actions/products/getProducts'
import Loader from '../components/Loader/Loader'

function AdminEditProduct({setAdminDisplay}) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    const {oneProduct} = useSelector ((state)=> state.products)

    useEffect(() => {
      setAdminDisplay(true)
    setLoading(true)
      dispatch(getProductByID(id))
    }, [dispatch, id])   

    return (
        <div>
            <EditProduct oneProduct={oneProduct} loading={loading} setLoading={setLoading}/>
    
        </div>
      )

  
}

export default AdminEditProduct