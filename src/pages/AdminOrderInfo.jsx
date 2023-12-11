import React from 'react'
import OrderInfo from '../components/AdminDashboard/Orders/OrderInfo'
import { useParams } from 'react-router-dom'

function AdminOrderInfo({setAdminDisplay}) {
  const {id} = useParams()
  return (
    <div>
      <OrderInfo id={id} setAdminDisplay={setAdminDisplay}/>
    </div>
  )
}

export default AdminOrderInfo