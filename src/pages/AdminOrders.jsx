import React from 'react'
import OrdersAdmin from '../components/AdminDashboard/Orders/OrdersAdmin'

function AdminOrders({setAdminDisplay}) {
  
  return (
    <div><OrdersAdmin setAdminDisplay={setAdminDisplay}/></div>
  )
}

export default AdminOrders