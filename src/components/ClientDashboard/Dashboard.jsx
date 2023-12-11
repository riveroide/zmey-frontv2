import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../../app/actions/user/getUser";
import FavoritesContainer from "./FavoritesContainer";
import OrdersContainer from "./OrdersContainer";
import { getFavorites } from "../../app/actions/favorites/getFavorites";
import { AiOutlineHeart } from "react-icons/ai";
import { getOrders } from "../../app/actions/orders/getOrders";
import { TbTruckDelivery } from "react-icons/tb";
import { BiChevronRight } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userInfo);
  const { favorites } = useSelector((state) => state.favorites);
  const { orders } = useSelector((state) => state.orders);
  const { t } = useTranslation("dashboard");

  const [activeOption, setActiveOption] = useState("favorites");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (currentUser) {
        try {
          await dispatch(getFavorites(currentUser.id));
          await dispatch(getOrders(currentUser.id));
        } catch (error) {
          return error;
        } finally {
          setLoading(false);
        }
      } else {
        window.location("/");
      }
    };
    fetchData();
  }, [dispatch, currentUser, activeOption]);

  return (
    <div className="bg-gray-200">
      <div className="bg-[#010101] pt-2 pb-2 fixed z-20 min-w-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex-col flex lg:flex-row items-start lg:items-center">
            <div className="flex items-center pl-2 lg:pl-0">
              <img
                className="border-2 shadow border-gray-600 rounded-full mr-3 w-[50px] h-[50px]"
                src={currentUser?.picture}
                alt="logo"
              />
              <div>
                <h5 className="text-sm text-white leading-4 mb-1">
                  {currentUser?.name}
                </h5>
              </div>
            </div>
          </div>
          <div className="pt-4 w-full lg:w-[30%] md:w-[40%] sm:w-[50%] justify-evenly flex">
            <Link to="/">
              <button className="focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">
                {t("backButton")}
              </button>
            </Link>
            <Link to="/">
              <button
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-black px-8 py-2 text-sm"
                onClick={() => dispatch(clearUser())}
              >
                {t("logoutButton")}
              </button>
            </Link>

            <button
              className="sm:hidden focus:outline-none ml-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-3 py-2 text-sm border border-white"
              onClick={toggleSidebar}
            >
              {showSidebar ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Page title ends */}
      <div className="flex flex-row h-screen">
        {/* Sidebar */}
        <div className="bg-[#010101] text-white sm:flex hidden flex-col justify-between w-64 lg:pt-[66px] pt-[120px] ">
          <nav className="flex-grow">
            <div className="flex flex-col justify-between h-full">
              <div>
                <button
                  className={`flex items-center justify-between w-full px-4 py-2 text-lg font-medium ${
                    activeOption === "favorites"
                      ? "text-[#010101] bg-[#DDA63A]"
                      : "text-white hover:text-[#010101] hover:bg-[#DDA63A]"
                  }`}
                  onClick={() => handleOptionChange("favorites")}
                >
                  <div className="flex items-center gap-2">
                    <AiOutlineHeart /> {t("favorites")}
                  </div>
                  {activeOption === "favorites" && (
                    <BiChevronRight className="text-2xl" />
                  )}
                </button>
                <button
                  className={`flex items-center justify-between w-full px-4 py-2 text-lg font-medium ${
                    activeOption === "orders"
                      ? "text-[#010101] bg-[#DDA63A]"
                      : "text-white hover:text-[#010101] hover:bg-[#DDA63A]"
                  }`}
                  onClick={() => handleOptionChange("orders")}
                >
                  <div className="flex items-center gap-2">
                    <TbTruckDelivery /> {t("orders")}
                  </div>
                  {activeOption === "orders" && (
                    <BiChevronRight className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Mobile menu */}
        <div
          className={
            showSidebar
              ? "absolute top-[120px] h-screen z-10 pt-4 bg-[#010101] text-white flex-col justify-between w-full"
              : "hidden"
          }
        >
          <nav className="flex-grow">
            <div className="flex flex-col justify-between h-full">
              <div>
                <button
                  className={`flex items-center justify-between w-full px-4 py-2 text-lg font-medium ${
                    activeOption === "favorites"
                      ? "text-[#010101] bg-[#DDA63A]"
                      : "text-white hover:text-[#010101] hover:bg-[#DDA63A]"
                  }`}
                  onClick={() => {
                    handleOptionChange("favorites");
                    setShowSidebar(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <AiOutlineHeart /> {t("favorites")}
                  </div>
                  {activeOption === "favorites" && (
                    <BiChevronRight className="text-2xl" />
                  )}
                </button>
                <button
                  className={`flex items-center justify-between w-full px-4 py-2 text-lg font-medium ${
                    activeOption === "orders"
                      ? "text-[#010101] bg-[#DDA63A]"
                      : "text-white hover:text-[#010101] hover:bg-[#DDA63A]"
                  }`}
                  onClick={() => {
                    handleOptionChange("orders");
                    setShowSidebar(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TbTruckDelivery /> {t("orders")}
                  </div>
                  {activeOption === "orders" && (
                    <BiChevronRight className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Main content */}
        <div
          className={`flex-grow ${
            loading ? "w-full" : "w-[80%] lg:p-6 overflow-auto"
          } pt-[120px] lg:pt-[66px] max-h-screen h-screen`}
        >
          {loading && <Loader />}
          {activeOption === "favorites" && !loading && (
            <FavoritesContainer
              favorites={favorites}
              userID={currentUser.id}
              title={t("favoritesEmptyTitle")}
              subtitle={t("favoritesEmptySubtitle")}
            />
          )}
          {activeOption === "orders" && !loading && (
            <OrdersContainer
              orders={orders}
              title={t("ordersEmptyTitle")}
              subtitle={t("ordersEmptySubtitle")}
              idOrderT={t("orderID")}
              dateT={t("Date")}
              itemsT={t("Items")}
              statusT={t("Status")}
              totalT={t("Total")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
