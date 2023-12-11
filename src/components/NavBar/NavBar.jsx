import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoZmey from "../../assets/PNG-02.png";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  getFemaleCategories,
  getMaleCategories,
  getProducts,
} from "../../app/actions/products/getProducts";
import {
  modifyCategory,
  modifyGender,
} from "../../app/actions/filters/filters";

const NavBar = ({ setShowLogin, setShowCart, setShowMenu, adminDisplay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMaleMenuOpen, setIsMaleMenuOpen] = useState(false);
  const [isFemaleMenuOpen, setIsFemaleMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.userInfo);
  const { cartProducts } = useSelector((state) => state.cart);
  const { maleCategories, femaleCategories } = useSelector(
    (state) => state.products
  );
  const { t } = useTranslation("navbar");

  useEffect(() => {
    dispatch(getMaleCategories());
    dispatch(getFemaleCategories());
  }, []);

  let cartQuantity = 0;

  cartProducts?.map((product) => {
    return (cartQuantity += product.quantity);
  });

  const handleFemaleMenuOpen = () => {
    setIsFemaleMenuOpen(true);
  };

  const handleFemaleMenuClose = () => {
    setIsFemaleMenuOpen(false);
  };

  const handleMaleMenuOpen = () => {
    setIsMaleMenuOpen(true);
  };

  const handleMaleMenuClose = () => {
    setIsMaleMenuOpen(false);
  };

  const handleMenuGenderClick = (e) => {
    dispatch(
      getProducts(undefined, undefined, undefined, undefined, e.target.value)
    );
    dispatch(modifyCategory("All"));
    dispatch(modifyGender(e.target.value));
    navigate("/results");
    window.scrollTo(0, 0);
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
    window.scrollTo(0, 0);
  };

  const handleRedirect = () => {
    if (
      window.location.href === "https://www.zmeys.com/" ||
      window.location.href === "http://localhost:3000/"
    ) {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  if (adminDisplay) {
    return null;
  }

  return (
    <header
      aria-label="Site Header"
      className="bg-black border-white border-b-2 z-30 fixed min-w-full"
    >
      <div className="justify-center relative flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div
          className="block text-teal-600 h-24 cursor-pointer"
          onClick={() => handleRedirect()}
        >
          <span className="sr-only">{t("home")}</span>
          <img src={LogoZmey} alt="/" className="h-24" />
        </div>

        <div className="flex flex-1 h-full items-center justify-end md:justify-between">
          <div
            aria-label="Site Nav"
            className="hidden w-[80%] h-full md:items-center md:justify-center md:flex"
          >
            <div className="flex justify-center text-lg h-full items-center w-full">
              <div
                className="h-full items-center lg:flex hidden "
                onMouseLeave={handleMaleMenuClose}
              >
                <button
                  className="hover:text-white transition font-bold text-gray-500/75 px-6 h-full"
                  onMouseEnter={handleMaleMenuOpen}
                  value="male"
                  onClick={(e) => {
                    handleMenuGenderClick(e);
                    setIsMaleMenuOpen(false);
                  }}
                >
                  {t("male")}
                </button>
                {/* Dropdown menu */}
                {isMaleMenuOpen && (
                  <div
                    className="absolute h-56 items-center text-base top-full left-0 w-screen flex flex-col bg-black text-white rounded-b-md shadow-lg font-roboto animate-fade-down animate-duration-300 animate-ease-in-out"
                    onMouseLeave={handleMaleMenuClose}
                  >
                    {/* Add menu items for the "Male" dropdown menu */}
                    <div className="flex w-[80%]">
                      <div className="flex flex-col">
                        <p className="text-start text-lg pl-2">
                          {t("categories")}
                        </p>
                        {maleCategories?.map((name, index) => (
                          <button
                            className="cursor-pointer text-gray-500 hover:text-white text-start pl-2"
                            key={index}
                            value="male"
                            name={name}
                            onClick={(e) => {
                              handleMenuItemClick(e);
                              setIsMaleMenuOpen(false);
                            }}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add more menu items as needed */}
                  </div>
                )}
              </div>
              <div
                onMouseLeave={handleFemaleMenuClose}
                className="h-full items-center lg:flex hidden"
              >
                <button
                  className="hover:text-white transition font-bold text-gray-500/75 px-6 h-full"
                  onMouseEnter={handleFemaleMenuOpen}
                  value="female"
                  onClick={(e) => {
                    handleMenuGenderClick(e);
                    setIsFemaleMenuOpen(false);
                  }}
                >
                  {t("female")}
                </button>
                {/* Dropdown menu */}
                {isFemaleMenuOpen && (
                  <div
                    className="absolute h-56 items-center text-base top-full left-0 w-screen flex flex-col bg-black text-white rounded-b-md shadow-lg font-roboto animate-fade-down animate-duration-300 animate-ease-in-out"
                    onMouseLeave={handleFemaleMenuClose}
                  >
                    {/* Add menu items for the "Female" dropdown menu */}
                    <div className="flex w-[80%]">
                      <div className="flex flex-col">
                        <p className="text-start text-lg pl-2">
                          {t("categories")}
                        </p>
                        {femaleCategories?.map((name, index) => (
                          <button
                            className="cursor-pointer text-gray-500 hover:text-white text-start pl-2"
                            key={index}
                            value="female"
                            name={name}
                            onClick={(e) => {
                              handleMenuItemClick(e);
                              setIsFemaleMenuOpen(false);
                            }}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add more menu items as needed */}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
              <div>
                {currentUser?.isAdmin ? (
                  <Link className="block rounded-full" to="/admin">
                    <div className="flex justify-center items-center">
                      <button className="text-xs text-center p-2 rounded-xl bg-white hover:bg-gray-700 hover:text-white hover:duration-500">
                        Admin Dashboard
                      </button>
                    </div>
                  </Link>
                ) : null}
              </div>
              <div
                className="block relative rounded-full cursor-pointer bg-white px-1 py-1 text-2xl font-medium text-black transition"
                onClick={() => setShowCart(true)}
              >
                {cartQuantity > 0 ? (
                  <div className="absolute flex justify-center items-center bg-red-500 text-white p-2 rounded-full w-[10px] h-[10px] text-[9px] top-0 right-0">
                    {cartQuantity}
                  </div>
                ) : null}
                <BiShoppingBag />
              </div>
              {/* Normal menu */}
              {currentUser?.email ? (
                <Link
                  className="hidden lg:block rounded-full"
                  to="/profile"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex rounded-full w-[32px]">
                    <img
                      src={currentUser?.picture}
                      alt="Profile Pic"
                      className="object-cover rounded-full"
                    />
                  </div>
                </Link>
              ) : (
                <button
                  className="hidden lg:block rounded-full bg-white hover:bg-gray-200 px-1 py-1 text-2xl text-black transition"
                  onClick={() => setShowLogin(true)}
                >
                  <CgProfile />
                </button>
              )}
              <div
                className="lg:hidden flex rounded-md cursor-pointer bg-white px-1 py-1 text-xl w-[32px] h-[32px] items-center justify-center text-black transition"
                onClick={() => setShowMenu(true)}
              >
                <RxHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
