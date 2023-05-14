import React from "react";

import { Button, Img, Text } from "components";
import AnimatedStartingHomepageHeader from "components/AnimatedStartingHomepageHeader";
import MainHomepageStackhappyguytwo from "components/MainHomepageStackhappyguytwo";

const HeaderOnePage = () => {
  return (
    <>
      <div className="bg-gray_900_02 h-[803px] mx-auto relative w-full">
        <div className="absolute bottom-[0] font-inter h-[1199px] md:h-[736px] md:px-5 right-[0] w-[72%] md:w-full">
          <div className="h-[1199px] md:h-[634px] m-auto w-full">
            <div className="absolute bottom-[0] md:h-[634px] h-[931px] inset-x-[0] mx-auto w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
              <Img
                src="images/img_aboutuswireframe.png"
                className="absolute h-[535px] object-cover right-[0] top-[0] w-auto"
                alt="wireframeformai"
              />
            </div>
            <Img
              src="images/img_ellipse37_12.png"
              className="absolute h-[551px] object-cover right-[0] top-[0] w-[48%]"
              alt="ellipseThirtySeven"
            />
          </div>
          <MainHomepageStackhappyguytwo
            className="absolute h-[736px] right-[7%] top-[11%] w-[79%] md:w-full"
            languageOne="Total  Project"
            twohundred="200+"
          />
        </div>
        <AnimatedStartingHomepageHeader
          className="absolute border border-blue_100 border-solid flex flex-row flex-wrap font-spacegrotesk inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full"
          getInTouch="get in touch"
        />
        <Text
          className="absolute font-spacegrotesk leading-[126.00%] left-[8%] text-left text-white_A700 top-[30%] w-[39%] sm:w-full"
          as="h4"
          variant="h4"
        >
          Our forward-thinking digital agency helps you break new ground
        </Text>
        <Text
          className="absolute bottom-[38%] font-normal font-spacegrotesk leading-[160.00%] left-[8%] not-italic text-left text-white_A700 w-[36%] sm:w-full"
          variant="body4"
        >
          At Ebony Technology, we create digital solutions that support
          businesses to launch, run and grow.
        </Text>
        <Button
          className="absolute bottom-[20%] capitalize cursor-pointer font-medium font-spacegrotesk leading-[normal] left-[8%] min-w-[193px] text-2xl md:text-[22px] text-center text-gray_900_01 sm:text-xl w-auto"
          shape="RoundedBorder10"
          size="lg"
          variant="FillOrange400"
        >
          contact us
        </Button>
      </div>
    </>
  );
};

export default HeaderOnePage;
