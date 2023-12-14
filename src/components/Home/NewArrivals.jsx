import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({
  productsToShow,
  newArrivalsT,
  shopNowT,
}) => {
  const renderProduct = (product) => {
   
    if (product) {
      const { image, name, id } = product;
      return (
        <div key={name} className="relative block group">
          <Link
            to={`/product/${id}`}
            className="relative block group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={image}
              alt="/"
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-xl shadow-xl shadow-black"
              
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white shadow-current p-2 bg-black bg-opacity-20 rounded-xl">{name}</h3>

              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs uppercase tracking-wide text-white border-2 hover:bg-white hover:text-black hover:duration-700 font-roboto rounded-xl">
                {shopNowT}
              </span>
            </div>
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <section>
        <div className="min-w-full px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 border-b-2 border-white">
          <header className="text-center">
            <h2 className="text-xl font-bold text-white sm:text-3xl ">
              {newArrivalsT}
            </h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3 ">
            {productsToShow?.slice(0, 2)?.map((product) => (
              <li key={product?.name}>{renderProduct(product)}</li>
            ))}

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 rounded-sm">
              {renderProduct(productsToShow[2])}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
