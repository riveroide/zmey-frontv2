import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/PNG-02.png";
import { AiOutlineMail } from "react-icons/ai";

export const Admin = (props) => {
  const { currentUser } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <div className="overflow-x-hidden z-10 font-poppins">
      <div className="flex w-screen h-screen text-gray-400 bg-gray-900 ">
        <div className="flex flex-col items-start min-w-[17%] pb-4 px-6 overflow-auto border-r border-gray-800 text-gray-500 ">
          <a
            className="flex items-center justify-center flex-shrink-0 w-full h-16"
            href="/"
          >
            {/* <svg
              className="w-8 h-8 stroke-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg> */}

            <img src={Logo} alt="/" className="h-20 rounded-xl" />
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <p className="text-gray-300 font-semibold">Dashboard</p>
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-briefcase"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <line x1="12" y1="12" x2="12" y2="12.01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <p className="text-gray-300 font-semibold">Products</p>
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/colorscollections"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-briefcase"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <line x1="12" y1="12" x2="12" y2="12.01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <p className="text-gray-300 font-semibold">Global Features</p>
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/addproduct"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
              <path d="M15 6h6m-3 -3v6" />
            </svg>
            <p className="text-gray-300 font-semibold">Add product</p>
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/orders"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-truck-delivery"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              <line x1="3" y1="9" x2="7" y2="9" />
            </svg>
            <p className="text-gray-300 font-semibold">Orders</p>
          </a>
          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/users"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p className="text-gray-300 font-semibold">Users</p>
          </a>

          <a
            className="flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/codes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p className="text-gray-300 font-semibold">Codes</p>
          </a>
          <a
            className=" text-gray-300 flex items-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-800 gap-3 px-2"
            href="/admin/emails"
          >
            <AiOutlineMail />
            <p className="text-gray-300 font-semibold">Registered Emails</p>
          </a>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800">
            <h1 className="text-lg font-medium text-gray-300">
              {props.title ? props.title : "Dashboard"}
            </h1>
          </div>
          <div className="flex-grow overflow-auto bg-gray-800">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
