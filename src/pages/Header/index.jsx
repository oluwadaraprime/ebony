import React from "react";

import { Button, Img, Text } from "components";
import AnimatedStartingHomepageHeader from "components/AnimatedStartingHomepageHeader";
import HeaderImages from "components/HeaderImages";

const HeaderPage = () => {
  return (
    <>
      <div className="bg-gray_900_02 flex font-spacegrotesk h-[803px] justify-end mx-auto relative w-full">
        <div className="h-[1199px] md:h-[634px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute h-[1199px] md:h-[634px] inset-y-[0] my-auto right-[0] w-[72%] md:w-full">
            <div className="absolute bottom-[0] md:h-[634px] h-[931px] inset-x-[0] mx-auto w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
              <Img
                src="images/img_aboutuswireframe.png"
                className="absolute h-[535px] object-cover right-[0] top-[0] w-auto"
                alt="wireframerOne"
              />
            </div>
            <Img
              src="images/img_ellipse37_13.png"
              className="absolute h-[551px] object-cover right-[0] top-[0] w-[48%]"
              alt="ellipseThirtySeven"
            />
          </div>
          <AnimatedStartingHomepageHeader
            className="absolute border border-blue_100 border-solid flex flex-row flex-wrap inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full"
            getInTouch="get in touch"
          />
          <div className="absolute flex flex-col gap-[54px] items-start justify-start left-[8%] self-stretch top-[20%] w-auto">
            <Text
              className="leading-[126.00%] max-w-[560px] md:max-w-full text-left text-white_A700"
              as="h4"
              variant="h4"
            >
              Our forward-thinking digital agency helps you break new ground
            </Text>
            <Text
              className="font-normal leading-[160.00%] max-w-[513px] md:max-w-full not-italic text-left text-white_A700"
              variant="body4"
            >
              At Ebony Technology, we create digital solutions that support
              businesses to launch, run and grow.
            </Text>
            <Button
              className="capitalize cursor-pointer font-medium leading-[normal] min-w-[193px] text-2xl md:text-[22px] text-center text-gray_900_01 sm:text-xl w-auto"
              shape="RoundedBorder10"
              size="lg"
              variant="FillOrange400"
            >
              contact us
            </Button>
          </div>
        </div>
        <HeaderImages
          className="absolute bottom-[0] flex flex-col font-inter items-center justify-start pt-0.5 md:px-5 right-[5%] w-auto sm:w-full"
          languageOne="Total  Project"
          twohundred="200+"
        />
      </div>
    </>
  );
};

export default HeaderPage;
