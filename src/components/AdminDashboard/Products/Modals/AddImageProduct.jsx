import React, { useState } from "react";
import { uploadFile } from "../../../../firebase/config";
const AddImageProduct = ({
  imageProduct,
  setImageProduct,
  input,
  setInput,
}) => {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      setInput({
        ...input,
        image: result,
    })
    } catch (error) {
      console.log(error);
    } finally {
        setImageProduct(false);
        }
  };
  if (!imageProduct) {
    return (
      <div className="flex justify-center p-2">
        <button
          className="border-2 p-2 rounded-xl hover:bg-black hover:text-white hover:duration-500"
          onClick={() => {
            setImageProduct(true);
          }}
        >
          UPLOAD PRODUCT IMAGE
        </button>
      </div>
    );
  } else {
    return (
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="border-2 p-1 rounded-xl">
          upload
        </button>
      </form>
    );
  }
};

export default AddImageProduct;
