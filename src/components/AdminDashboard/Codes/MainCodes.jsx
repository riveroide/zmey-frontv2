import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { getCodes } from "../../../app/actions/codes/getCodes";
import { deleteCode } from "../../../app/actions/codes/deleteCode";
import { postCode } from "../../../app/actions/codes/postCode";

import TotalSalesRender from "./TotalSalesRender";

export const MainCodes = ({ setAdminDisplay }) => {
  const dispatch = useDispatch();
  const { codes } = useSelector((state) => state.codes);
  const [loading, setLoading] = useState(false);
  const [newCode, setNewCode] = useState("");

  useEffect(() => {
    setAdminDisplay(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        dispatch(getCodes());
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

  const handleDeleteCode = async (codeId) => {
    await dispatch(deleteCode(codeId));
    dispatch(getCodes());
  };

  const handleAddCode = async () => {
    await dispatch(postCode(newCode, false));
    setNewCode("");
    dispatch(getCodes());
  };

  return (
    <Admin title={"Ambrassador's Codes"}>
      <div className="mb-8 w-1/2 ">
        <table className="border w-full border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Code</th>
              <th className="p-4">Action</th>
              <th className="p-4">Sales</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((code) =>
              code.oneTimeCode ? null : (
                <tr key={code.id} className="border-t border-gray-300">
                  <td className="p-4">{code.code}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDeleteCode(code.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="p-4">
                    <TotalSalesRender code={code.code} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex w-1/2">
        <input
          type="text"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          className="flex-1 py-2 px-4 border border-gray-300 rounded-l "
        />
        <button
          onClick={handleAddCode}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
        >
          Add Code
        </button>
      </div>
    </Admin>
  );
};
