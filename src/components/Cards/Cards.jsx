import React, { useEffect, useState } from "react";
import FavoriteButton from "./FavoriteButton";
import axios from "../../app/axiosConfig";
import { Link } from "react-router-dom";

function Cards({ name, image, image2, price, userID, productID, colors }) {
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [favID, setFavID] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const secondImage = new Image();
    secondImage.src = image2;
    if (userID) {
      axios
        .get(`/favorites?userID=${userID}&productID=${productID}`)
        .then((res) => {
          setFavoriteStatus(true);
          setFavID(res.data.id);
        })
        .catch(() => setFavoriteStatus(false));
    }
  }, [favoriteStatus, image, name, price, productID, userID, image2]);

  return (
    <div
      class="my-2 w-full max-w-xs rounded-lg md:hover:scale-110 duration-500 h-[320px] sm:h-[480px]"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col w-full ">
        <div class="relative flex sm:h-96 h-56">
          <Link to={`/product/${productID}`}>
            <img
              className={`duration-150 absolute top-0 right-0 h-full w-full object-cover rounded-t-lg ${isHovered ? "opacity-0" : "opacity-100"}`}
              src={image}
              alt={name}
            />
            <img
              className={`duration-150 absolute top-0 right-0 h-full w-full object-cover rounded-t-lg ${isHovered ? "opacity-100" : "opacity-0"}`}
              src={image2}
              alt={name}
            />
          </Link>
          <FavoriteButton
            key={productID}
            productName={name}
            productPic={image}
            productPrice={price}
            userID={userID}
            productID={productID}
            favoriteStatus={favoriteStatus}
            favID={favID}
            setFavoriteStatus={setFavoriteStatus}
          />
        </div>
        <div class="items-start flex flex-col justify-center gap-2">
          <Link to={`/product/${productID}`}>
            <h5 class="sm:text-lg text-lg tracking-tight text-white break-words sm:h-auto">
              {name.length >= 30 ? name.substring(0, 30) + "..." : name}
            </h5>
          </Link>
          <div class="flex items-center justify-between">
            <p>
              <span class="sm:text-xl text-xl font-bold text-white">
                $ {price}
              </span>
            </p>
          </div>
          {colors?.length > 1 && (
            <h5 class="text-base font-roboto font-bold tracking-tight text-white break-words sm:h-auto">
              {colors?.length} Colors Available
            </h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
