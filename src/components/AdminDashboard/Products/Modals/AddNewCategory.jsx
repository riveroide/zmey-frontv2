import React, { useState } from 'react';
import { getCategories } from '../../../../app/actions/categories/getCategories';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { postCategory } from '../../../../app/actions/categories/postCategory';

const AddNewCategory = ({ newCategory, setNewCategory }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
  });

  const handlerChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryAddition = async () => {
    await dispatch(postCategory(input));

    Swal.fire({
      position: 'bottom-end',
      icon: 'info',
      title: 'New category saved',
      showConfirmButton: false,
      timer: 1200,
    });

    await dispatch(getCategories());

    setInput({
      name: '',
    });

    setNewCategory(false);
  };

  if (newCategory) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className="flex flex-col px-16 py-36 bg-gray-300 opacity-100 rounded-2xl">
          <div className="text-black">
            Please enter the new category below
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              onChange={handlerChange}
              className="text-black text-center rounded-xl p-2"
              name="name"
              value={input.name}
            />
            <button
              className="bg-green-600 p-2 rounded-xl text-white"
              onClick={handleCategoryAddition}
            >
              OK
            </button>
          </div>
          <button
            onClick={() => {
              setNewCategory(false);
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

export default AddNewCategory;
