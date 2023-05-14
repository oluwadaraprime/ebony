import React from "react";

import { Button, Img, Text } from "components";

const MainHomepageStackhappyguytwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_happyguy2.png"
          className="absolute sm:cursor-pointer sm:fixed sm:h-[335px] h-[735px] sm:hidden inset-[0] justify-center sm:m-[] m-auto sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] object-cover sm:opacity-op sm:p-[] md:p-[] sm:pb-[] md:pb-[] md:pl-0 sm:pl-[] sm:pr-[] md:pr-[] md:pt-0 sm:pt-[] md:right-[-150px] sm:top-[0] w-full"
          alt="happyguyTwo"
        />
        <div className="absolute bottom-[43%] flex flex-col items-center justify-start right-[5%] w-[18%]">
          <div className="bg-white_A700 md:h-[52px] sm:h-[72px] h-[73px] relative rounded-[10px] w-full">
            <div className="absolute bottom-[14%] flex flex-col md:grid inset-x-[0] items-center justify-start md:justify-start md:m-[] md:mb-[] md:mt-[] mx-auto w-[83%]">
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
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-white_A700 flex flex-col sm:hidden items-center justify-end md:p-0 p-2.5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start mt-[5px] w-[96%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    {!!props?.languageTwo ? (
                      <Text
                        className="font-inter font-medium text-blue_gray_300 text-left w-auto"
                        variant="body7"
                      >
                        {props?.languageTwo}
                      </Text>
                    ) : null}
                    <div className="flex flex-row items-start justify-between w-full">
                      {!!props?.twohundredOne ? (
                        <Text
                          className="font-inter font-medium text-gray_900_01 text-left w-auto"
                          variant="body4"
                        >
                          {props?.twohundredOne}
                        </Text>
                      ) : null}
                      {!!props?.barcharttwentyoneOne ? (
                        <Img
                          src={props?.barcharttwentyoneOne}
                          className="h-[21px] w-[21px]"
                          alt="barchartTwentyOne_One"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!!props?.computer ? (
          <Button
            className="absolute bottom-[15%] flex h-12 inset-x-[0] items-center justify-center mx-auto rotate-[-15deg] w-12"
            shape="icbRoundedBorder10"
            size="smIcn"
            variant="icbFillDeeporange200"
          >
            <Img src={props?.computer} className="h-6" alt="computer" />
          </Button>
        ) : null}
        {!!props?.checkmark ? (
          <Img
            src={props?.checkmark}
            className="absolute h-[41px] left-[33%] top-[18%] w-auto"
            alt="checkmark"
          />
        ) : null}
      </div>
    </>
  );
};

MainHomepageStackhappyguytwo.defaultProps = {
  languageOne: "Total  Project",
  twohundred: "200+",
};

export default MainHomepageStackhappyguytwo;
