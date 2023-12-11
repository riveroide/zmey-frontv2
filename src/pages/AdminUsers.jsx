import React from 'react'
import AdminUsersList from '../components/AdminDashboard/Users/AdminUsersList'

function AdminUsers({setAdminDisplay}) {
  return (
    <div><AdminUsersList setAdminDisplay={setAdminDisplay}/></div>
  )
}

export default AdminUsers