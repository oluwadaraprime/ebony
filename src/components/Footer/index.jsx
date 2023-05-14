import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex h-[338px] sm:h-[452px] md:h-[672px] justify-end ml-[99px] mr-[92px] my-[57px] relative w-[87%] md:w-full">
          <Text
            className="font-inter font-normal mb-[72px] ml-[22px] mt-auto not-italic text-gray_900_03 text-left w-auto"
            variant="body7"
          >
            © Copyright 2022, All Rights Reserved by Nagency
          </Text>
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[158px] h-full inset-[0] items-center justify-between m-auto self-stretch w-auto">
            <div className="flex flex-col gap-[9px] items-start justify-start w-[339px]">
              <Img
                src="images/img_ebonylogofordark.png"
                className="common-pointer h-[77px] md:h-auto object-cover w-[61px] sm:w-full"
                alt="ebonylogofordar_One"
                onClick={() => navigate("/")}
              />
              <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start self-stretch w-auto">
                <Text
                  className="font-bold font-spacegrotesk leading-[30.00px] max-w-[339px] md:max-w-full text-left text-white_A700"
                  variant="body7"
                >
                  We create digital solutions that support businesses to launch,
                  run and grow.
                </Text>
                <div className="flex flex-col gap-[42px] items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-left text-white_A700 w-auto"
                      variant="body7"
                    >
                      25 Courtney Road, Grays, Essex, UK RM16 4TZ
                    </Text>
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-left text-white_A700 w-auto"
                      variant="body7"
                    >
                      +44 (0) 772 761 8504
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                    variant="body8"
                  >
                    © 2023 Ebony Technology. Copyright and rights reserved
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[158px] items-start justify-between self-stretch w-auto md:w-full">
              <div className="flex flex-row gap-[97px] items-start justify-start self-stretch w-auto">
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          Home
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          About
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          Contact Us
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal font-spacegrotesk not-italic text-center text-white_A700 w-auto"
                          variant="body7"
                        >
                          Services
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-end justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal font-spacegrotesk leading-[160.00%] max-w-[378px] md:max-w-full not-italic text-left text-white_A700"
                    variant="body7"
                  >
                    We will like to send you newsletters about our products,
                    offers and services.
                  </Text>
                  <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row gap-[13px] h-[50px] md:h-auto items-center justify-start pl-5 py-[17px] rounded self-stretch w-auto sm:w-full">
                    <Text
                      className="font-normal font-spacegrotesk not-italic text-blue_gray_800 text-left w-auto"
                      variant="body7"
                    >
                      Enter email address
                    </Text>
                    <Button
                      className="cursor-pointer font-normal font-spacegrotesk h-[50px] leading-[normal] not-italic text-center text-sm text-white_A700 w-[118px]"
                      shape="CustomBorderLR4"
                      size="lg"
                      variant="FillBlue600"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start ml-auto self-stretch w-auto">
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
                      className="common-pointer h-6 w-6"
                      alt="twitter"
                      onClick={handleNavigate}
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

Footer.defaultProps = {};

export default Footer;
