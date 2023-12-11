import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { postColor } from "../../../../app/actions/colors/postColor";
import { getColors } from "../../../../app/actions/categories/getCategories";


const AddNewColor = ({ newColor, setNewColor }) => {
  const dispatch= useDispatch();
  const [input, setInput] = useState({
    color: "",
  });

  const handlerChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleColorAddition = async () => {
    await dispatch(postColor(input));

    Swal.fire({
      position: 'bottom-end',
      icon: 'info',
      title: 'New color saved',
      showConfirmButton: false,
      timer: 1200
    });

    await dispatch(getColors());

    setInput({
      color: "",
    });

    setNewColor(false);
  };

  if (newColor) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className="flex flex-col px-16 py-36 bg-gray-300 opacity-100 rounded-2xl">
          <div className="text-black ">
          Please enter the new color below
          </div>
          
          <div className="flex justify-center items-center">
            <input
              type="text"
              onChange={handlerChange}
              className="text-black text-center rounded-xl p-2"
              name="color"
              value={input.color}
            />
            <button className="bg-green-600 p-2 rounded-xl text-white" onClick={handleColorAddition}>
              OK
            </button>
          </div>
          <button
            onClick={() => {
              setNewColor(false);
            }}
            className="bg-white text-black p-2 rounded-xl text-center mt-4"
          >
            back
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AddNewColor;
