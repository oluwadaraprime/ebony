import React from "react";

import { Button, Img, Text } from "components";

const AnimatedStartingHomepageHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_ebonylogofordark.png"
          className="sm:h-[100px] h-[63px] md:h-auto object-cover sm:w-[100px] w-[50px]"
          alt="ebonylogofordar"
        />
        <div className="sm:bottom-[] sm:fixed flex sm:flex-col flex-row gap-10 sm:gap-2.5 sm:h-auto sm:inset-x-[50px] items-center justify-start sm:justify-start self-stretch sm:top-[50px] w-auto">
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <Text
              className="capitalize font-bold font-spacegrotesk text-left text-white_A700 w-auto"
              variant="body3"
            >
              {props?.home}
            </Text>
          </div>
          <div className="flex flex-row gap-10 items-center justify-center self-stretch w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body4"
              >
                {props?.aboutusOne}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body4"
              >
                {props?.contact}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body4"
              >
                {props?.language}
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="capitalize cursor-pointer font-medium font-spacegrotesk leading-[normal] min-w-[144px] text-base text-center text-gray_900_01 w-auto"
          shape="RoundedBorder10"
          size="md"
          variant="FillOrange400"
        >
          {props?.getInTouch}
        </Button>
      </div>
    </>
  );
};

AnimatedStartingHomepageHeader.defaultProps = {
  home: "home",
  aboutusOne: "about us",
  contact: "contact",
  language: "services ",
  getInTouch: "get in touch",
};

export default AnimatedStartingHomepageHeader;
