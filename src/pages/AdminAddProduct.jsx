import React from 'react'
import AddProduct from '../components/AdminDashboard/Products/AddProduct'

function AdminAddProduct({setAdminDisplay}) {
  return (
    <div>
        <AddProduct setAdminDisplay={setAdminDisplay}/>
    </div>
  )
}

export default AdminAddProduct