import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../app/actions/products/getProducts";
import { modifyGender } from "../../app/actions/filters/filters";
import { BsGenderFemale, BsGenderMale} from "react-icons/bs"

const CarouselPhotos = ({ categoriesGallery }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("female");

  const filteredGallery = categoriesGallery.filter((item) => {
    if (filter === "All") return true;
    return item.gender === filter;
  });

  return (
    <div
      id="categories"
      className="container font-roboto font-bold flex lg:justify-center justify-center flex-col mx-auto min-w-full sm:px-8 border-b-2 border-white pt-[64px] min-h-screen gap-8 sm:gap-12"
    >
      <div className="hidden sm:flex justify-center space-x-4 lg:mb-0 pt-8">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            filter === "male" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setFilter("male");
          }}
        >
          Shop Men
        </button>

        <button
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            filter === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setFilter("female");
          }}
        >
          Shop Woman
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full md:h-[365px] lg:h-[400px] sm:py-4 sm:px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={filteredGallery?.length}
          visibleSlides={4}
          step={1}
          infinite={true}
          isPlaying={true}
          interval={4000}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-20 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider className="xl:w-[1133px] lg:w-[1000px]">
                {filteredGallery?.map((item, index) => (
                  <Slide key={index} index={index} className="w-[275px]">
                    <div
                      className="flex flex-shrink-0 relative w-full h-[400px]"
                      onClick={() => {
                        dispatch(
                          getProducts(
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            filter
                          )
                        );
                        dispatch(modifyGender(filter));
                        navigate(`/results`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-4">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          {item.categories}
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-20 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={filteredGallery?.length}
          visibleSlides={3}
          step={1}
          infinite={true}
          isPlaying={true}
          interval={4000}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-20 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider className="w-[750px] h-[365px]">
                {/* <div
          id="slider"
          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
        > */}
                {filteredGallery?.map((item, index) => (
                  <Slide
                    index={index}
                    key={index}
                    className="w-[292px] h-[365px]"
                  >
                    <div className="flex flex-shrink-0 relative h-[365px] sm:w-auto min-h-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          {item.categories}
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
                {/* </div> */}
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-20 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={filteredGallery?.length}
          visibleSlides={1}
          step={1}
          infinite={true}
          isPlaying={true}
          interval={4000}
        >
          <div className="w-full h-full relative flex items-center justify-center pt-4 pb-4">
            <div className="sm:hidden flex absolute justify-center space-x-4 z-20 right-3 top-2 pt-4">
              <button
                className={`px-3 py-3 text-base  font-medium rounded-full ${
                  filter === "male" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => {
                  setFilter("male");
                }}
              >
                <BsGenderMale />
              </button>

              <button
                className={`px-3 py-3 text-base font-medium rounded-full ${
                  filter === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => {
                  setFilter("female");
                }}
              >
                <BsGenderFemale />
              </button>
            </div>
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-20 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider className="gap-2">
                {filteredGallery?.map((item, index) => (
                  <Slide key={index} index={index} className="px-2">
                    <div
                      className="flex flex-shrink-0 relative w-full sm:w-auto h-[600px] rounded-md "
                      onClick={() => {
                        dispatch(
                          getProducts(
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            filter
                          )
                        );
                        dispatch(modifyGender(filter));
                        navigate(`/results`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-center w-full h-full rounded-md"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          {item.categories}
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
                {/* </div> */}
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-20 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      {/* <div className="text-center">
        <button
          className="bg-white text-black hover:bg-black hover:text-white hover:duration-500 py-3 px-6 rounded-full text-lg font-medium"
          onClick={() => {
            dispatch(
              getProducts(undefined, undefined, undefined, undefined, filter)
            );
            dispatch(modifyGender(filter));
            navigate(`/results`);
            window.scrollTo(0, 0);
          }}
        >
          Shop Now
        </button>
      </div> */}
    </div>
  );
};

export default CarouselPhotos;
