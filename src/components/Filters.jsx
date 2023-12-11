import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyCategory,
  modifyColor,
  modifySize,
} from "../app/actions/filters/filters";
import { BiChevronDown } from "react-icons/bi";

function Filters({
  categories,
  sizes,
  colors,
  selectCategoryT,
  selectColorT,
  selectSizeT,
  allT,
}) {
  const dispatch = useDispatch();
  const {
    category: categorySelected,
    size: sizeSelected,
    color: colorSelected,
  } = useSelector((state) => state.filters);

  const [open, setOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div className="flex items-start gap-4 justify-around bg-coal rounded-md w-full px-10 py-2 text-white">
      <div
        className={`w-52 font-medium max-h-80 hover:cursor-pointer relative`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`bg-coal z-30 w-full p-2 flex justify-between rounded flex-col border-white border ${
            !categorySelected && "text-gray-700"
          }`}
        >
          <div className="flex justify-between items-center">
            {categorySelected
              ? categorySelected === "All"
                ? allT
                : categorySelected?.length > 25
                ? categorySelected?.substring(0, 25) + "..."
                : categorySelected
              : selectCategoryT}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div>
          <ul
            className={`bg-coal mt-2 top-full left-0 overflow-y-auto absolute z-50 ${
              open ? "max-h-40 w-full" : "max-h-0 hidden"
            } `}
          >
            <li
              id="All"
              className={`p-2 text-sm hover:bg-white hover:text-coal ${
                categorySelected === "All" && "bg-[#DDA63A] text-[#010101]"
              } `}
              onClick={(e) => {
                if ("All" !== categorySelected) {
                  dispatch(modifyCategory("All"));
                  setOpen(false);
                }
                dispatch(modifyCategory(e.target.id));
              }}
            >
              {allT}
            </li>
            {Array.isArray(categories) &&
              categories?.map((category) => {
                return (
                  <li
                    id={category?.name}
                    key={category?.name}
                    className={`p-2 text-sm hover:bg-white hover:text-coal
                  ${
                    category?.name?.toLowerCase() ===
                      categorySelected?.toLowerCase() &&
                    "bg-[#DDA63A] text-[#010101]"
                  }
                  `}
                    onClick={(e) => {
                      dispatch(modifyCategory(e.target.id));
                      setOpen(false);
                    }}
                  >
                    {category?.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div
        className={`w-52 font-medium max-h-80 hover:cursor-pointer relative`}
      >
        <div
          onClick={() => setColorOpen(!colorOpen)}
          className={`bg-coal w-full p-2 flex justify-between rounded flex-col border-white border ${
            !colorSelected && "text-gray-700"
          }`}
        >
          <div className="flex justify-between items-center">
            {colorSelected
              ? colorSelected === "All"
                ? allT
                : colorSelected?.length > 25
                ? colorSelected?.substring(0, 25) + "..."
                : colorSelected
              : selectColorT}
            <BiChevronDown
              size={20}
              className={`${colorOpen && "rotate-180"}`}
            />
          </div>
          <ul
            className={`bg-coal mt-2 top-full left-0 overflow-y-auto absolute z-50 ${
              colorOpen ? "max-h-40 w-full" : "max-h-0 hidden"
            } `}
          >
            <li
              id="All"
              className={`p-2 text-sm hover:bg-white hover:text-coal ${
                colorSelected === "All" && "bg-[#DDA63A] text-[#010101]"
              } `}
              onClick={(e) => {
                if ("All" !== colorSelected) {
                  dispatch(modifyColor("All"));
                  setColorOpen(false);
                }
                dispatch(modifyColor(e.target.id));
              }}
            >
              {allT}
            </li>
            {Array.isArray(colors) &&
              colors?.map((color) => {
                return (
                  <li
                    id={color.color}
                    key={color.color}
                    className={`p-2 text-sm hover:bg-white hover:text-coal
                  ${
                    color?.color?.toLowerCase() ===
                      colorSelected?.toLowerCase() &&
                    "bg-[#DDA63A] text-[#010101]"
                  }
                  `}
                    onClick={(e) => {
                      setColorOpen(false);
                      dispatch(modifyColor(e.target.id));
                    }}
                  >
                    {color?.color}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div
        className={`w-52 font-medium max-h-80 hover:cursor-pointer relative`}
      >
        <div
          onClick={() => setSizeOpen(!sizeOpen)}
          className={`bg-coal w-full p-2 flex justify-between rounded flex-col border-white border ${
            !sizeSelected && "text-gray-700"
          }`}
        >
          <div className="flex justify-between items-center">
            {sizeSelected
              ? sizeSelected === "All"
                ? allT
                : sizeSelected?.length > 25
                ? sizeSelected?.substring(0, 25) + "..."
                : sizeSelected
              : selectSizeT}
            <BiChevronDown
              size={20}
              className={`${sizeOpen && "rotate-180"}`}
            />
          </div>
          <ul
            className={`bg-coal mt-2 overflow-y-auto absolute top-full left-0 z-50 ${
              sizeOpen ? "max-h-40 w-full" : "max-h-0 hidden"
            } `}
          >
            <li
              id="All"
              className={`p-2 text-sm hover:white hover:coal ${
                sizeSelected === "All" && "bg-[#DDA63A] text-[#010101]"
              } `}
              onClick={(e) => {
                if ("All" !== sizeSelected) {
                  dispatch(modifySize("All"));
                  setSizeOpen(false);
                }
                dispatch(modifySize(e.target.id));
              }}
            >
              {allT}
            </li>
            {Array.isArray(sizes) &&
              sizes?.map((size) => {
                return (
                  <li
                    id={size.size}
                    key={size.size}
                    className={`p-2 text-sm hover:bg-white hover:text-coal
                  ${
                    size?.size?.toLowerCase() === sizeSelected?.toLowerCase() &&
                    "bg-[#DDA63A] text-[#010101]"
                  }
                  `}
                    onClick={(e) => {
                      setSizeOpen(false);
                      dispatch(modifySize(e.target.id));
                    }}
                  >
                    {size?.size}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
