import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyCategory,
  modifyGender,
} from "../../app/actions/filters/filters";
import { getProducts } from "../../app/actions/products/getProducts";
import { useTranslation } from "react-i18next";

function MobileMenu({ visible, setShowLogin, setShowMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation("navbar");

  const { currentUser } = useSelector((state) => state.userInfo);
  const { maleCategories, femaleCategories } = useSelector(
    (state) => state.products
  );

  const [femaleMenu, setFemaleMenu] = useState(false);
  const [maleMenu, setMaleMenu] = useState(false);

  const handleMenuGenderClick = (e) => {
    dispatch(
      getProducts(undefined, undefined, undefined, undefined, e.target.value)
    );
    dispatch(modifyCategory("All"));
    dispatch(modifyGender(e.target.value));
    navigate("/results");
  };

  const handleMenuItemClick = (e) => {
    dispatch(
      getProducts(
        undefined,
        e.target.name,
        undefined,
        undefined,
        e.target.value
      )
    );
    dispatch(modifyGender(e.target.value));
    dispatch(modifyCategory(e.target.name));
    navigate("/results");
  };
  if (!visible) return null;
  else
    return (
      <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex z-30 inset-0">
        <div className="fixed top-0 right-0 flex flex-col w-[300px] items-center h-screen z-30 bg-white animate-fade-left animate-once animate-duration-300 animate-ease-out animate-normal animate-fill-forwards">
          <div className="flex justify-between px-6 pt-2 pb-2 items-center w-full">
            {currentUser?.email ? (
              <Link
                className="block rounded-full"
                to="/profile"
                onClick={() => {
                  setFemaleMenu(false);
                  setShowMenu(false);
                }}
              >
                <div className="flex rounded-full w-[32px] h-[32px]">
                  <img
                    src={currentUser?.picture}
                    alt="Profile Pic"
                    className="object-cover rounded-full"
                  />
                </div>
              </Link>
            ) : (
              <button
                className="block rounded-full bg-white hover:bg-gray-200 px-1 py-1 text-2xl text-black transition"
                onClick={() => setShowLogin(true)}
              >
                <CgProfile />
              </button>
            )}
            <button
              onClick={() => {
                setFemaleMenu(false);
                setShowMenu(false);
              }}
              className="flex text-center items-center justify-center text-2xl"
            >
              <AiOutlineClose width="32px" />
            </button>
          </div>
          <div className="flex flex-col w-full text-lg">
            <button
              className="flex mt-4 py-2 px-6 items-center justify-between"
              onClick={() => setMaleMenu(!maleMenu)}
            >
              {t("male")}
              <AiOutlinePlus
                className={`${
                  maleMenu ? "rotate-45 duration-150" : "rotate-0 duration-150"
                }`}
              />
            </button>
            {maleMenu && (
              <div className="flex flex-col px-6 animate-fade-down animate-duration-300 animate-ease-in-out">
                <button
                  className="text-gray-700 text-start pl-2"
                  value="male"
                  onClick={(e) => {
                    setMaleMenu(false);
                    setShowMenu(false);
                    handleMenuGenderClick(e);
                  }}
                >
                  {t("allProducts")}
                </button>
                {maleCategories?.map((name, index) => (
                  <button
                    className="cursor-pointer text-gray-700 text-start pl-2"
                    key={index}
                    value="male"
                    name={name}
                    onClick={(e) => {
                      setMaleMenu(false);
                      setShowMenu(false);
                      handleMenuItemClick(e);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
            <button
              className="flex mt-4 py-2 px-6 items-center justify-between"
              onClick={() => setFemaleMenu(!femaleMenu)}
            >
              {t("female")}
              <AiOutlinePlus
                className={`${
                  femaleMenu
                    ? "rotate-45 duration-150"
                    : "rotate-0 duration-150"
                }`}
              />
            </button>
            {femaleMenu && (
              <div className="flex flex-col px-6 animate-fade-down animate-duration-300 animate-ease-in-out">
                <button
                  className="text-gray-700 text-start pl-2"
                  value="female"
                  onClick={(e) => {
                    setFemaleMenu(false);
                    setShowMenu(false);
                    handleMenuGenderClick(e);
                  }}
                >
                  {t("allProducts")}
                </button>
                {femaleCategories?.map((name, index) => (
                  <button
                    className="cursor-pointer text-gray-700 text-start pl-2"
                    key={index}
                    value="female"
                    name={name}
                    onClick={(e) => {
                      setFemaleMenu(false);
                      setShowMenu(false);
                      handleMenuItemClick(e);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default MobileMenu;
