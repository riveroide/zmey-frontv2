import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import EditProductListStock from "./EditProducListStock";
const EditProductsStock = ({
  sizes,
  colors,
  setInput,
  input,
  clean,
  setClean,
}) => {
  const [colorSelected, setColorSelected] = useState("");
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeSelected, setSizeSelected] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);

  const [stockInput, setStockInput] = useState({
    color: "",
    sizes: [{ size: "", quantity: "" }],
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setClean(e.target.value);
    setStockInput({
      color: colorSelected,
      sizes: [
        {
          size: sizeSelected,
          quantity: e.target.value,
        },
      ],
    });
  }
  return (
    <div className="flex flex-col justify-start items-center gap-2">
      {/* selectors and input container */}
      <div className="flex items-center gap-2 w-full text-black">


        <div
          className={`w-1/4 font-normal max-h-80 my-4 hover:cursor-pointer relative`}
        >
          <div
            onClick={() => setColorOpen(!colorOpen)}
            className={`bg-white w-full p-2 flex justify-between rounded flex-col z-10 ${
              !colorSelected && "text-black"
            }`}
          >
            <div className="flex justify-between items-center">
              {colorSelected
                ? colorSelected?.length > 25
                  ? colorSelected?.substring(0, 25) + "..."
                  : colorSelected
                : "Select Color"}
              <BiChevronDown
                size={20}
                className={`${colorOpen && "rotate-180"}`}
              />
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                colorOpen ? "max-h-60" : "max-h-0"
              }`}
              style={{ position: "absolute", width: "100%" }}
            >
              {colors?.map((color) => {
                return (
                  <li
                    id={color.color}
                    key={color.color}
                    className={`p-2 text-sm hover:bg-[#010101] hover:text-white
          ${
            color?.color?.toLowerCase() === colorSelected?.toLowerCase() &&
            "bg-black text-white"
          }
          `}
                    onClick={() => {
                      if (
                        color?.color?.toLowerCase() !==
                        colorSelected.toLowerCase()
                      ) {
                        setColorSelected(color?.color);
                        setColorOpen(false);
                        setClean("");
                      }
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
          className={`w-1/4 font-normal max-h-80 hover:cursor-pointer relative`}
        >
          <div
            onClick={() => setSizeOpen(!sizeOpen)}
            className={`bg-white w-full p-2 flex justify-between rounded flex-col ${
              !sizeSelected && "text-gray-700"
            }`}
          >
            <div className="flex justify-between items-center">
              {sizeSelected
                ? sizeSelected?.length > 25
                  ? sizeSelected?.substring(0, 25) + "..."
                  : sizeSelected
                : "Select Size"}
              <BiChevronDown
                size={20}
                className={`${sizeOpen && "rotate-180"}`}
              />
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                sizeOpen ? "max-h-60" : "max-h-0"
              }`}
              style={{ position: "absolute", width: "100%" }}
            >
              {sizes?.map((size) => {
                return (
                  <li
                    id={size.size}
                    key={size.size}
                    className={`p-2 text-sm hover:bg-[#010101] hover:text-white
          ${
            size?.size?.toLowerCase() === sizeSelected?.toLowerCase() &&
            "bg-black text-white"
          }
          `}
                    onClick={(e) => {
                      if (
                        size?.size?.toLowerCase() !== sizeSelected.toLowerCase()
                      ) {
                        setSizeSelected(size?.size);
                        setSizeOpen(false);
                        setClean("");
                      }
                    }}
                  >
                    {size?.size}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* <div className="w-1/6"> */}
          <input
            type="number"
            className="p-2 text-black w-1/4"
            onChange={handleChange}
            value={clean}
            
          />
        {/* </div> */}

      
          <button
          className="flex justify-center items-center w-1/4 border-2 text-white p-2 rounded-md"
          onClick={() => {
            const filterColor = input.stock.filter((color) => color.color === colorSelected);
          
            if (
              !stockInput?.color ||
              !stockInput?.sizes[0]?.size ||
              !stockInput?.sizes[0]?.quantity
            ) {
              Swal.fire({
                position: 'bottom-end',
                icon: 'info',
                title: 'Please enter information in all fields',
                showConfirmButton: false,
                timer: 1200
              });
            }
          
            if (filterColor.length) {
              const findsize = filterColor[0]?.sizes?.filter((size) => size.size === sizeSelected);
              if (findsize.length) {
                const updatedStock = input.stock.map((color) => {
                  if (color.color === colorSelected) {
                    const updatedSizes = color.sizes.map((size) => {
                      if (size.size === sizeSelected) {
                        return {
                          ...size,
                          quantity: parseInt(size.quantity) + parseInt(clean),
                        };
                      }
                      return size;
                    });
                    return {
                      ...color,
                      sizes: updatedSizes,
                    };
                  }
                  return color;
                });
                setInput({
                  ...input,
                  stock: updatedStock,
                });
              } else {
                const updatedStock = input.stock.map((color) => {
                  if (color.color === colorSelected) {
                    return {
                      ...color,
                      sizes: [...color.sizes, stockInput.sizes[0]],
                    };
                  }
                  return color;
                });
                setInput({
                  ...input,
                  stock: updatedStock,
                });
              }
            } else {
              setInput({
                ...input,
                stock: [...input.stock, stockInput],
              });
            }
            setClean("");
          }}
          
          >
            confirm
          </button>
        
      </div>

      <div className="w-full">
        <EditProductListStock input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default EditProductsStock;
