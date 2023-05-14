import React from "react";

import { Img, Text } from "components";

const AnimatedStartingHomepageTestimonials = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute md:h-[463px] h-[467px] inset-[0] justify-center m-auto w-full">
          <div className="absolute bg-white_A700 h-[463px] inset-[0] m-auto w-full"></div>
          <Text
            className="absolute font-spacegrotesk inset-x-[0] mx-auto text-center text-gray_900_01 top-[0] w-max"
            as="h5"
            variant="h5"
          >
            {props?.testimonials}
          </Text>
          <Text
            className="absolute font-nunito inset-x-[0] mx-auto text-center text-gray_900_01 top-[7%] w-max"
            variant="body9"
          >
            {props?.one}
          </Text>
        </div>
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto self-stretch w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-start self-stretch w-auto md:w-full">
            <Img
              src="images/img_caretcircleleft.svg"
              className="h-12 w-12"
              alt="caretcircleleft"
            />
            <Text
              className="capitalize font-avenirnext font-normal leading-[160.00%] max-w-[1002px] md:max-w-full not-italic text-blue_gray_800 text-center"
              variant="body3"
            >
              {props?.descriptionOne}
            </Text>
            <div className="flex flex-col h-12 items-center justify-start w-12">
              <Img
                src="images/img_clock.svg"
                className="h-12 w-12"
                alt="clock"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-center justify-start self-stretch w-auto">
            <div className="flex flex-col h-20 items-center justify-start w-20">
              <Img
                src="images/img_photo.png"
                className="h-20 md:h-auto rounded-[50%] w-20"
                alt="photo"
              />
            </div>
            <Text
              className="capitalize font-medium font-spacegrotesk text-gray_900_01 text-left w-auto"
              variant="body3"
            >
              {props?.jamestoriff}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

AnimatedStartingHomepageTestimonials.defaultProps = {
  testimonials: "Testimonials",
  one: "“",
  descriptionOne: (
    <>
      Overall, I highly recommend ebony technology to any business looking for a
      tech consultancy and support provider. Their expertise and commitment to
      excellence have been essential in helping our business stay ahead of the
      curve, and I&#39;m grateful for their partnership.
    </>
  ),
  jamestoriff: "James Toriff",
};

export default AnimatedStartingHomepageTestimonials;
