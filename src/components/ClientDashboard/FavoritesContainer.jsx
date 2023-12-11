import React from "react";
import Favorites from "./Favorites";
import EmptyFavorites from "./EmptyFavorites";

function FavoritesContainer({ favorites, userID, title, subtitle }) {
  return favorites.length ? (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 justify-center gap-4">
      {favorites.map((favorite) => {
        return (
          <Favorites
            key={favorite.id}
            image={favorite.productPic}
            name={favorite.productName}
            price={favorite.productPrice}
            favoriteID={favorite.id}
            productID={favorite.productID}
            favoritesLength={favorites.length}
            userID={userID}
          />
        );
      })}
    </div>
  ) : (
    <EmptyFavorites title={title} subtitle={subtitle} />
  );
}

export default FavoritesContainer;
