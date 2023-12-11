import React from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const Product = ({ product, onDelete }) => {
  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete'
      });

      if (result.isConfirmed) {
        await onDelete(product.id);
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        );
      }
    } catch (error) {
      // Manejar errores si es necesario
    }
  };

  return (
    <div className="w-full h-[1/6]">
      <div className="flex justify-between items-center gap-2 w-full bg-gray-900 rounded-lg text-center border-2">
        <div className="w-20 justify-start item-center">
          <img src={product.image} alt="productimage" className="rounded-l-lg w-20 h-24 object-cover" />
        </div>
        <div className="flex flex-col h-1/2">
          <p>{product.name}</p>
          <p className="">Price: {product.price}</p>
        </div>
        <div className="flex w-1/4 justify-end gap-4 mr-8">
          <button
            className="w-1/4 border-y-2 border-red-600 text-red-600"
            onClick={handleDelete}
          >
            delete
          </button>
          <Link to={`/admin/products/edit/${product.id}`} className="w-1/4 border-y-2" >
            edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
