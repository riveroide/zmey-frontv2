import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function CarouselDetails({ image, gallery }) {
  return (
    <div className="md:w-[50%] max-h-[614px] flex relative">
      <CarouselProvider
        naturalSlideWidth={140}
        naturalSlideHeight={125}
        totalSlides={1 + gallery?.length}
        className="w-full"
      >
        <div className="absolute z-10 left-0 top-[50%] text-3xl">
          <ButtonBack>
            <IoIosArrowBack />
          </ButtonBack>
        </div>
        <div className="">
          <Slider className="">
            <Slide index={0} className="">
              <img src={image} alt="0" className="h-full mx-auto" />
            </Slide>
            {gallery?.map((image, index) => {
              return (
                <Slide
                  index={index + 1}
                  className="flex w-full min-h-full justify-center items-center"
                >
                  <img src={image} alt={index + 1} className="h-full m-auto" />
                  {/**/}
                </Slide>
              );
            })}
          </Slider>

          <div className="absolute z-10 right-0 top-[50%] text-3xl">
            <ButtonNext>
              <IoIosArrowForward />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default CarouselDetails;
