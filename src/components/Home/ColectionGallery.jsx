import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ColectionGallery = ({
  collectionName,
  collectionProducts,
  seeMore,
  theNewCollection,
  collectionMessage1,
  collectionMessage2,
}) => {
  const navigate = useNavigate();

  const renderImage = (image, alt) => (
    <img className="w-80 lg:block rounded-xl" src={image} alt={alt} />
  );

  return (
    <div
      id="collection"
      className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0 min-w-full "
    >
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 gap-2">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <p className="text-3xl xl:text-4xl leading-9 text-gray-800 dark:text-white lg:pl-8">
              {collectionName}: {theNewCollection}
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600 dark:text-white lg:pl-8 font-roboto">
              {collectionMessage1} {collectionName} {collectionMessage2}
            </p>
          </div>
          <div className="mt-16 w-full lg:pl-8">
            <button
              className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100 uppercase"
              onClick={() => {
                navigate(`/collection/${collectionName}`);
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-xl font-medium leading-5 ">{seeMore}</p>

              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                alt="arrow"
              />

              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1dark.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 lg:pr-8 ">
          {collectionProducts.slice(0, 3).map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              onClick={() => window.scrollTo(0, 0)}
              key={index}
            >
              <div
                key={index}
                className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 lg:space-y-5 xl:space-y-8"
              >
                {renderImage(product.image, "/")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColectionGallery;
