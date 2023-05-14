import React from "react";

import { Img } from "components";
import AnimatedStartingHomepageColumnOne1 from "components/AnimatedStartingHomepageColumnOne1";
import AnimatedStartingHomepageHeader from "components/AnimatedStartingHomepageHeader";

const HeadernewPage = () => {
  return (
    <>
      <div className="bg-gray_900_02 font-spacegrotesk h-[803px] mx-auto relative w-full">
        <div className="absolute bottom-[0] h-[1199px] md:h-[634px] md:px-5 right-[0] w-[72%] md:w-full">
          <div className="absolute bottom-[0] md:h-[634px] h-[931px] inset-x-[0] mx-auto w-full">
            <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
            <Img
              src="images/img_aboutuswireframe.png"
              className="absolute h-[535px] object-cover right-[0] top-[0] w-auto"
              alt="wireframerOne"
            />
          </div>
          <Img
            src="images/img_ellipse37_15.png"
            className="absolute h-[551px] object-cover right-[0] top-[0] w-[48%]"
            alt="ellipseThirtySeven"
          />
        </div>
        <AnimatedStartingHomepageHeader
          className="absolute border border-blue_100 border-solid flex flex-row flex-wrap inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full"
          getInTouch="get in touch"
        />
        <AnimatedStartingHomepageColumnOne1
          className="absolute bottom-[18%] flex flex-col items-start justify-start left-[8%] pb-[15px] pr-[15px] md:px-5 w-auto sm:w-full"
          ourforwardthinkOne="Our forward-thinking digital agency helps you break new ground"
        />
      </div>
    </>
  );
};

export default HeadernewPage;
