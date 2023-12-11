import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../app/actions/favorites/deleteFavorite";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getFavorites } from "../../app/actions/favorites/getFavorites";

function Favorites({
  image,
  name,
  price,
  favoriteID,
  productID,
  favoritesLength,
  userID,
}) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    if (favoritesLength === 1) {
      dispatch(deleteFavorite(favoriteID)).then(() => window.location.reload());
    }
    await dispatch(deleteFavorite(favoriteID));
    dispatch(getFavorites(userID));
  };

  return (
    <div className="product-card p-4 relative">
      <Link to={`/product/${productID}`}>
        <img src={image} alt={name} className="w-full" />
        <h3 className="text-lg mt-2">{name}</h3>
      </Link>
      <p className="text-gray-700 text-base font-medium mt-1">$ {price}</p>
      <button
        onClick={() => handleClick()}
        className="absolute top-5 bg-white rounded-full p-1 right-5 text-xl text-red-500"
      >
        <BiTrash />
      </button>
    </div>
  );
}

export default Favorites;
