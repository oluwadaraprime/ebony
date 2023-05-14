import React from "react";

import { Button, Img, Text } from "components";

const AnimatedStartingHomepageFooternew = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[338px] sm:h-[452px] md:h-[672px] ml-[100px] mr-[92px] my-[57px] relative w-[87%] md:w-full">
          <Text
            className="absolute bottom-[21%] font-inter font-normal left-[2%] not-italic text-gray_900_03 text-left w-auto"
            variant="body7"
          >
            {props?.copyright2022}
          </Text>
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[158px] h-full inset-[0] items-center justify-between sm:m-[] m-auto sm:mb-[] self-stretch w-auto">
            <div className="flex flex-col gap-[9px] items-start justify-start w-[339px]">
              <Img
                src="images/img_ebonylogofordark.png"
                className="h-[77px] md:h-auto object-cover sm:w-[100px] w-[61px]"
                alt="ebonylogofordar_One"
              />
              <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start self-stretch w-auto">
                <Text
                  className="font-bold font-spacegrotesk leading-[30.00px] max-w-[339px] md:max-w-full text-left text-white_A700"
                  variant="body7"
                >
                  {props?.wecreatedigitalOne}
                </Text>
                <div className="flex flex-col gap-[42px] items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-left text-white_A700 w-auto"
                      variant="body7"
                    >
                      {props?.p25courtneyroad}
                    </Text>
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-left text-white_A700 w-auto"
                      variant="body7"
                    >
                      {props?.p440772761}
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                    variant="body8"
                  >
                    {props?.p2022ebonytechno}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[158px] items-start justify-between sm:m-[] sm:mx-0 self-stretch w-auto md:w-full">
              <div className="flex flex-row sm:gap-[27px] gap-[97px] items-start justify-start sm:mb-[-92px] sm:ml-[-112px] sm:mr-[0] sm:pl-0 self-stretch w-[100px] sm:w-auto">
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          {props?.homeOne}
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          {props?.about}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-40px] pr-[30px] self-stretch w-[100px]">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          {props?.contactus}
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          {props?.services}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-end justify-start sm:m-[] sm:mb-[-180px] sm:ml-[-100px] sm:mr-[] sm:p-[] sm:pb-10 sm:pl-[] sm:pr-[] sm:pt-[] self-stretch sm:w-[190%] w-auto">
                <div className="flex flex-col gap-5 items-start justify-start sm:m-[] sm:ml-[140px] sm:mr-[] sm:p-[] sm:pl-[] sm:pr-[] self-stretch sm:w-[66%] w-auto">
                  <Text
                    className="font-normal font-spacegrotesk leading-[160.00%] max-w-[378px] md:max-w-full not-italic text-left text-white_A700"
                    variant="body7"
                  >
                    {props?.wewillliketo}
                  </Text>
                  <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row gap-[13px] h-[50px] md:h-auto items-center justify-start pl-5 py-[17px] rounded self-stretch w-auto sm:w-full">
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-blue_gray_800 text-left w-auto"
                      variant="body7"
                    >
                      {props?.enteremailaddreOne}
                    </Text>
                    <Button
                      className="cursor-pointer font-normal font-spacegrotesk h-[50px] leading-[normal] not-italic text-center text-sm text-white_A700 w-[118px]"
                      shape="CustomBorderLR4"
                      size="lg"
                      variant="FillBlue600"
                    >
                      {props?.subscribe}
                    </Button>
                  </div>
                </div>
                <div className="sm:bottom-[] flex flex-row gap-4 items-center justify-start sm:m-[] sm:mb-5 ml-auto self-stretch w-auto">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      src="images/img_plus.svg"
                      className="h-6 w-6"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      src="images/img_twitter.svg"
                      className="h-6 w-6"
                      alt="twitter"
                    />
                  </div>
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      src="images/img_camera.svg"
                      className="h-6 w-6"
                      alt="camera"
                    />
                  </div>
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      src="images/img_volume.svg"
                      className="h-6 w-6"
                      alt="volume"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

AnimatedStartingHomepageFooternew.defaultProps = {
  copyright2022: "© Copyright 2022, All Rights Reserved by Nagency",
  wecreatedigitalOne:
    "We create digital solutions that support businesses to launch, run and grow.",
  p25courtneyroad: "25 Courtney Road, Grays, Essex, UK RM16 4TZ",
  p440772761: "+44 (0) 772 761 8504",
  p2022ebonytechno: "© 2023 Ebony Technology. Copyright and rights reserved",
  homeOne: "Home",
  about: "About",
  contactus: "Contact Us",
  services: "Services",
  wewillliketo:
    "We will like to send you newsletters about our products, offers and services.",
  enteremailaddreOne: "Enter email address",
  subscribe: "Subscribe",
};

export default AnimatedStartingHomepageFooternew;
