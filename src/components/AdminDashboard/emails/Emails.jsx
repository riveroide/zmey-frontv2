import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { getAllRegisteredEmailsAction } from "../../../app/actions/newsletter/getNewsletter";

function Emails({ setAdminDisplay }) {
  const dispatch = useDispatch();
  const { registeredEmails } = useSelector((state) => state.codes);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAdminDisplay(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        dispatch(getAllRegisteredEmailsAction());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <Admin title={"Loading..."}>
        <Loader />
      </Admin>
    );
  }

  return (
    <Admin title={"Registered Emails"}>
      <div className="mb-8 w-1/2 ">
        <table className="border w-full border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Email</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {registeredEmails?.map((element, index) => {
              const fecha = new Date(element.createdAt);

              const año = fecha.getFullYear();
              const mes = fecha.getMonth() + 1;
              const día = fecha.getDate();

              const fechaLegible = `${día}/${mes}/${año}`;
              return (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-4 text-center">{element.email}</td>
                  <td className="p-4 text-center">{fechaLegible}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Admin>
  );
}

export default Emails;
