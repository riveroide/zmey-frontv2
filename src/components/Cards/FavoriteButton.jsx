import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../app/actions/favorites/deleteFavorite";
import Swal from "sweetalert2";


import { postFavorite } from "../../app/actions/favorites/postFavorite";

function FavoriteButton({
  userID,
  productID,
  productPic,
  productName,
  productPrice,
  favoriteStatus,
  favID,
  setFavoriteStatus,
}) {
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState({
    userID: "",
    productID: "",
    productPic: "",
    productName: "",
    productPrice: 0,
  });

  const handleClick = () => {
    if (!userID) {
      return Swal.fire({
        position: "center",
        backdrop: false,
        icon: "warning",
        title: "Sign in to have a favorites liste",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!favoriteStatus) {
      setFavoriteStatus(true);
      dispatch(postFavorite(favorite));
    } else {
      setFavoriteStatus(false);
      dispatch(deleteFavorite(favID));
    }
  };

  useEffect(() => {
    setFavorite({
      userID,
      productID,
      productPic,
      productName,
      productPrice,
    });
  }, [dispatch]);
  if (favoriteStatus) {
    return (
      <button onClick={() => handleClick()} className="absolute top-1 right-1 bg-white border-4 border-white opacity-70 rounded-[50%] justify-center items-center flex">
        <span>
          {" "}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
              fill="currentColor"
            />
            <path d="M9 9H11V17H9V9Z" fill="currentColor" />
            <path d="M13 9H15V17H13V9Z" fill="currentColor" />
          </svg>{" "}
        </span>
      </button>
    );
  } else
    return (
      <button onClick={() => handleClick()} className="absolute top-1 right-1 bg-white border-4 border-white opacity-70 rounded-[50%] justify-center items-center flex">
        <span>
          {" "}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
              fill="currentColor"
            />
          </svg>{" "}
        </span>
      </button>
    );
}

export default FavoriteButton;
