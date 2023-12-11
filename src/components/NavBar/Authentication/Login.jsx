import React from 'react'
import { useSelector } from 'react-redux';
import Dashboard from '../../ClientDashboard/Dashboard';


export const Login = () => {
  const {currentUser} = useSelector((state)=>state.userInfo)
  if(currentUser?.name){
    return (
      <Dashboard />
    )
  } 
 

}
