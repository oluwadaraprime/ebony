import React from "react";

import { Button, Img, Text } from "components";

const HeaderImages = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="overflow-x-auto w-full">
          <div className="h-[670px] md:h-[735px] relative w-full">
            <Img
              src="images/img_happyguy2.png"
              className="absolute bottom-[0] h-[735px] left-[0] object-cover w-full"
              alt="happyguyTwo"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[69px] items-start justify-start right-[4%] top-[33%] w-1/5">
              <Img
                src="images/img_trash.svg"
                className="h-[59px] w-[59px]"
                alt="trash"
              />
              <div className="bg-white_A700 flex flex-col items-center justify-end ml-0.5 md:ml-[0] p-2.5 rounded-[10px] w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[5px] w-[96%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="font-inter font-medium text-blue_gray_300 text-left w-auto"
                      variant="body7"
                    >
                      {props?.languageOne}
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-inter font-medium text-gray_900_01 text-left w-auto"
                        variant="body4"
                      >
                        {props?.twohundred}
                      </Text>
                      <Img
                        src="images/img_barchart21_teal_300.svg"
                        className="h-[21px] w-[21px]"
                        alt="barchartTwentyOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="absolute bottom-[6%] flex h-12 items-center justify-center left-[38%] rotate-[-15deg] w-12"
              shape="icbRoundedBorder10"
              size="smIcn"
              variant="icbFillDeeporange200"
            >
              <Img
                src="images/img_computer.svg"
                className="h-6"
                alt="computer"
              />
            </Button>
            <Img
              src="images/img_checkmark_deep_purple_700.svg"
              className="absolute h-[41px] left-[24%] top-[21%] w-auto"
              alt="checkmark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HeaderImages.defaultProps = {
  languageOne: "Total  Project",
  twohundred: "200+",
};

export default HeaderImages;
