import React, { useState, useEffect } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../app/actions/user/gerAllUsers";


const AdminUsersList = ({setAdminDisplay}) => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.admin);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    setAdminDisplay(true)
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = sortUsers(filtered);
    setFilteredUsers(sorted);
  }, [searchQuery, allUsers, sortOrder]);

  const sortUsers = (users) => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedUsers;
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

    // Lógica para el paginado
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(allUsers.length / usersPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    return (
      <div>
        <Admin title={"Users"}>
          <div className="h-full flex justify-center mx-auto p-10">
            <div className="bg-gray-700 w-[80%] min-h-[80%] h-fit">
              <div className="flex h-10">
                <div className="w-1/2 h-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-2 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="sortOrder" className="mr-2">
                    Sort Order:
                  </label>
                  <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    className="border-2 rounded-lg p-2"
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                {currentUsers.map((user) => (
                  <div
                    className="flex flex-col justify-start items-center gap-3 bg-gray-900 rounded-lg p-6 mb-6"
                    key={user.id}
                  >
                    <img
                      src={user.picture}
                      alt="img"
                      className="rounded-full w-[80px]"
                    />
                    <h2>{user.name}</h2>
                    <h4 className="text-xs mb-3">{user.email}</h4>
                    <button className="rounded-lg px-4 py-1 text-white bg-[#DDA63A] hover:bg-[#e09e1a] duration-300">
                      Info
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <nav>
                  <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Admin>
    </div>
  );
  
  
};

export default AdminUsersList;
