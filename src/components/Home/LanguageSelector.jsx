import React, { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

function LanguageSelector() {
  const [open, setOpen] = useState(false);

  let language = localStorage.getItem("pageLanguage");

  if (!language) language = "en";

  return (
    <div
      className={`w-[60px] font-medium max-h-80 hover:cursor-pointer relative`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`bg-[#010101] z-30 border-white border-2 text-white w-full p-2 flex items-center text-center justify-between flex-col ${
          !language && "text-gray-700"
        }`}
      >
        <div className="flex justify-between items-center text-center ">
          {language}
          <BiChevronUp
            size={20}
            className={`text-center ${open && "rotate-180"}`}
          />
        </div>
        <ul
          className={`bg-[#010101] border-white border-2 border-b-0 border-t-2 mt-2 bottom-full left-0 overflow-y-auto absolute z-50 ${
            open ? "max-h-40 w-full" : "max-h-0 hidden"
          } `}
        >
          <li
            id="en"
            className={`p-2 text-sm hover:bg-white hover:text-[#010101] items-center text-center`}
            onClick={() => {
              localStorage.setItem("pageLanguage", "en");
              setOpen(false);
              window.location.reload();
            }}
          >
            en
          </li>
          <li
            id="es"
            className={`p-2 text-sm hover:bg-white hover:text-[#010101] items-center text-center`}
            onClick={() => {
              localStorage.setItem("pageLanguage", "es");
              setOpen(false);
              window.location.reload();
            }}
          >
            es
          </li>
          <li
            id="es"
            className={`p-2 text-sm hover:bg-white hover:text-[#010101] items-center text-center`}
            onClick={() => {
              localStorage.setItem("pageLanguage", "bg");
              setOpen(false);
              window.location.reload();
            }}
          >
            bg
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelector;
