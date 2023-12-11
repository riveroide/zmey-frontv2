import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader.jsx"

const InstagramPost = ({ followUs }) => {
  const [media, setMedia] = useState([]);
  
  const result = media?.data?.filter((e) => e.media_type === "VIDEO");
  useEffect(() => {
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=media_url,media_type,permalink,thumbnail_url&access_token=IGQWROOTBBOWtfSlMtZA1VIWUlfOFlpVFJWVUMyWUh4V1VVSl9uOWZARZAzJYa09nYnRfSHpUakpSVFVabUgydUd2ejNBaTdDQmxPS1pDSFhwMDNaSWtaTm5BYkhDVU1YQ2ZAXcHR5dWhDMDV4WDhsT1k3TEpsQ1dFOVUZD"
      )
      .then((res) => {
        setMedia(res.data);
      });
  }, []);

  return (
    <div
      id="instagram"
      className="lg:p-12 p-2 border-b-2 border-white"
    >
      <div className="flex flex-col justify-center lg:text-3xl md:text-2xl text-white text-lg text-center">
        <h3 >{followUs} </h3>
        <h3 className="mb-8 tracking-wide">@ZMEYATHLETICS</h3>
      </div>
      <div className="flex justify-center w-[100%] mt-4 h-[40%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 sm:w-100% xl:grid-cols-4 gap-4 sm:w-[60%] lg:w-[70%] mb-12">
          {result ? (
            result?.map((info, i) => {
              if (i < 4) {
                return (
                  <Link
                    to="https://www.instagram.com/zmeyathletics/"
                    target="_blank"
                    key={info.id}
                  >
                    <div className="relative group">
                      <img
                        src={info.thumbnail_url}
                        alt="Smiling Girl"
                        className=" lg:block hidden w-full rounded-2xl"
                      />
                      <img
                        src={info.thumbnail_url}
                        alt="Smiling Girl"
                        className="lg:hidden block w-full rounded-2xl"
                      />
                      <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full hover:duration-700" />
                      <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:animate-fade hover:animate-duration-1000 hover:animate-delay-500 ">
                        <svg
                          width={120}
                          height={120}
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M44 20V20.001"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              }
            })
          ) : (
            <div><Loader/></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
