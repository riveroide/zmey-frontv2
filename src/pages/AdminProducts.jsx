import React from "react";
import { Admin } from "../components/AdminDashboard/AdminSidebar";
import MainProducts from "../components/AdminDashboard/Products/MainProducts";

function AdminProducts({setAdminDisplay}) {
  return (
    <div>
      <MainProducts setAdminDisplay={setAdminDisplay}/>
    </div>
  );
}

export default AdminProducts;
