import React, { useState } from "react";
import { uploadFile } from "../../../../firebase/config";

const AddGallery = ({ input, setInput, galleryImage, setGalleryImage }) => {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      if(input.gallery.length === 0){
        setInput({
          ...input,
          gallery: [result],
        });
      }else{
        setInput({
          ...input,
          gallery: [...input.gallery, result],
        });
      
    }
    } catch (error) {
      console.log(error);
    } finally {
      setGalleryImage(false);
        }
  };
  if (!galleryImage) {
    return (
      <div className='flex justify-center p-2'>
        <button
        className="border-2 p-2 rounded-xl hover:bg-black hover:text-white hover:duration-500"
          onClick={() => {
            setGalleryImage(true);
          }}
        >
          ADD GALLERY IMAGE
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

export default AddGallery;
