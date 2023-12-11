import React from "react";
import Cards from "./Cards";

function CardsContainer({ products, userID, noResultsT }) {
  if (!products?.length) return <h1> {noResultsT} </h1>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 m-2 sm:m-4 gap-4 xl:pl-2">
      {products.map((product) => {
        const image2 = product.gallery[0] ? product.gallery[0] : product.image;
        return (
          <Cards
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            image2={image2}
            userID={userID}
            productID={product.id}
            colors={product.colors}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
