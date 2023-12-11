import React from 'react'
import { MainCodes } from '../components/AdminDashboard/Codes/MainCodes'

function AdminCodes( {setAdminDisplay}) {
  return (
    <div><MainCodes setAdminDisplay={setAdminDisplay}/></div>
  )
}

export default AdminCodes