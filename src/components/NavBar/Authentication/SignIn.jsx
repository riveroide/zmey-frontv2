import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { getUser } from "../../../app/actions/user/getUser";
import logo from "../../../assets/PNG-02.png";

const SignIn = ({ visible, setShowLogin }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const ref = useRef();
  const { t } = useTranslation("googleModal");

  let userObject = "";

  useEffect(() => {
    if (user.name) {
      dispatch(getUser(user));
    }
  }, [user]);

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [setShowLogin, ref]);

  if (!visible) {
    return null;
  } else {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center z-50 animate-fade animate-once animate-duration-1000 animate-ease-in">
        <div
          className="w-[90%] lg:w-1/2 h-1/2 opacity-100 rounded-2xl flex flex-col justify-center bg-coal gap-4 animate-fade animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-in border-2"
          ref={ref}
        >

          {/* logo & text container */}
          <div className="mx-auto p-8 rounded-xl shadow-lg shadow-black">
            {/* logo */}
            <div className="flex justify-center">
              <img src={logo} alt="Logo" border="0" className="w-28 "  />
            </div>

            {/* text */}
            <div>
              <h1 className="text-white text-xl text-center h-full">
                {t("mainMessage")}
              </h1>
            </div>
          </div>

          {/* sing in button */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  userObject = jwtDecode(credentialResponse.credential);
                  setUser(userObject);
                  setShowLogin(false);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
