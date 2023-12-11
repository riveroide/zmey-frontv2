import React from "react";
import Emails from "../components/AdminDashboard/emails/Emails";

function AdminEmails({ setAdminDisplay }) {
  return (
    <div>
      <Emails setAdminDisplay={setAdminDisplay} />
    </div>
  )
}

export default AdminEmails;
