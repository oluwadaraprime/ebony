import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import ServicesColumnidentifyOne from "components/ServicesColumnidentifyOne";
import ServicesColumnyourBusinessCaseForANewDigitalSolution from "components/ServicesColumnyourBusinessCaseForANewDigitalSolution";
import ServicesDigitalDropDownImplementanime from "components/ServicesDigitalDropDownImplementanime";
import ServicesHeader from "components/ServicesHeader";
import ServicesOneColumn from "components/ServicesOneColumn";

const ServicesdigitaldropdownPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-spacegrotesk gap-[45px] items-center justify-start mx-auto w-full">
        <ServicesHeader
          className="border border-blue_100 border-solid flex items-center justify-between md:px-5 px-[100px] py-[19px] w-full"
          getInTouch="get in touch"
        />
        <div className="md:h-[1408px] h-[2029px] md:px-5 relative w-full">
          <div className="absolute h-[522px] right-[0] top-[5%] w-[45%] md:w-full">
            <Line className="absolute bg-blue_600 bottom-[9%] h-[35px] right-[0] rotate-[45deg] w-2/5" />
            <Img
              src="images/img_image18.png"
              className="absolute h-[522px] inset-y-[0] left-[0] my-auto object-cover w-[79%]"
              alt="imageEighteen"
            />
          </div>
          <div className="absolute bg-gray_50_01 bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto pl-1.5 w-full">
            <Img
              src="images/img_group4.svg"
              className="h-[109px] md:ml-[0] ml-[1326px] w-auto"
              alt="groupFour"
            />
            <ServicesOneColumn className="flex flex-col gap-20 items-start justify-start md:ml-[0] ml-[94px] mr-[100px] mt-[18px] self-stretch w-auto md:w-full" />
            <Img
              src="images/img_xmlid181.svg"
              className="h-[102px] mt-[27px] w-[102px]"
              alt="xmlid181"
            />
          </div>
          <Img
            src="images/img_aboutuswireframe.png"
            className="absolute h-[508px] left-[0] object-cover top-[3%] w-auto"
            alt="wireframerOne"
          />
          <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto self-stretch top-[5%] w-auto">
            <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Our Services
              </Text>
              <Img
                src="images/img_vector32.svg"
                className="h-[22px] w-[295px]"
                alt="vectorThirtyTwo"
              />
            </div>
            <Text
              className="capitalize font-normal leading-[160.00%] max-w-[445px] md:max-w-full not-italic text-center text-gray_50_02"
              variant="body4"
            >
              as a profit oriented digital agency , we offer the following
              services.
            </Text>
          </div>
          <Line className="absolute bg-purple_500 h-[35px] right-[0] rotate-[45deg] top-[0] w-[5%]" />
        </div>
        <div className="flex flex-col font-avenirnext md:px-5 relative w-full">
          <div className="flex flex-col mx-auto w-full">
            <div className="bg-white_A700 h-[1224px] md:h-[1718px] sm:h-[927px] mx-auto pt-[7px] px-[7px] w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-blue_700 blur-[1000.00px] bottom-[0] h-[292px] left-[1%] rounded-[231px] w-[33%]"></div>
              <div className="absolute flex flex-col md:gap-10 gap-[95px] h-max inset-y-[0] justify-start my-auto right-[2%] w-[92%]">
                <div className="flex flex-col gap-8 items-center justify-start md:ml-[0] ml-[303px] self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-center self-stretch w-auto">
                    <div className="flex flex-col font-spacegrotesk gap-4 items-center justify-start self-stretch w-auto">
                      <Text
                        className="capitalize text-cyan_900 text-left w-auto"
                        variant="body1"
                      >
                        our approach
                      </Text>
                      <Img
                        src="images/img_vector32_blue_600.svg"
                        className="h-2 w-[120px]"
                        alt="vectorThirtyTwo_One"
                      />
                    </div>
                    <Text
                      className="capitalize font-avenirnext font-medium text-blue_gray_600 text-center w-auto"
                      variant="body3"
                    ></Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-10 items-start justify-start self-stretch w-auto md:w-full">
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-8 w-8"
                        alt="checkmark"
                      />
                      <Text
                        className="capitalize font-medium text-blue_gray_600 text-center w-auto"
                        variant="body4"
                      >
                        review{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-8 w-8"
                        alt="checkmark_One"
                      />
                      <Text
                        className="capitalize font-medium text-blue_gray_600 text-center w-auto"
                        variant="body4"
                      >
                        identify
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-8 w-8"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="capitalize font-medium text-blue_gray_600 text-center w-auto"
                        variant="body4"
                      >
                        recommend
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-8 w-8"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="capitalize font-medium text-blue_gray_600 text-center w-auto"
                        variant="body4"
                      >
                        implement
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-spacegrotesk md:gap-10 gap-[138px] items-center justify-between self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-10 items-start justify-start self-stretch w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                      <div className="flex flex-col font-spacegrotesk items-center justify-start w-auto md:w-full">
                        <Text
                          className="text-blue_600 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          What we review
                        </Text>
                      </div>
                      <Text
                        className="font-avenirnext font-medium leading-[160.00%] max-w-[535px] md:max-w-full text-blue_gray_300 text-left"
                        variant="body4"
                      >
                        We meet with you to gather your requirements so as to
                        understand where you are currently, where you want to be
                        and what it takes to get there. In particular we gather
                        information relating to the following:
                      </Text>
                    </div>
                    <ServicesColumnyourBusinessCaseForANewDigitalSolution
                      className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full"
                      yourBusinessCaseForANewDigitalSolution="Your business case for a new digital solution"
                    />
                  </div>
                  <div className="font-inter h-[589px] relative w-[49%] md:w-full">
                    <div className="absolute border border-black_900_01 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[10%] rounded-[20px] w-[70%]">
                      <Img
                        src="images/img_photo_589x450.png"
                        className="h-[589px] md:h-auto object-cover rounded-[20px] w-full"
                        alt="photo"
                      />
                    </div>
                    <Button
                      className="absolute bottom-[39%] flex h-12 items-center justify-center left-[9%] rotate-[15deg] w-12"
                      shape="icbRoundedBorder10"
                      size="mdIcn"
                      variant="icbFillOrangeA700"
                    >
                      <Img
                        src="images/img_offer.svg"
                        className="h-6"
                        alt="offer"
                      />
                    </Button>
                    <div className="absolute bg-white_A700 flex flex-col items-center justify-start left-[0] p-3 rounded-[10px] shadow-bs top-[12%] w-[48%]">
                      <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                        <Img
                          src="images/img_ellipse33.png"
                          className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                          alt="ellipseThirtyThree"
                        />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                          <Text
                            className="font-medium text-gray_900_04 text-left w-auto"
                            variant="body6"
                          >
                            Amanda Young
                          </Text>
                          <Text
                            className="font-medium text-gray_500 text-left w-auto"
                            variant="body8"
                          >
                            Great job, Ebony tech.
                          </Text>
                        </div>
                        <Button
                          className="flex h-10 items-center justify-center my-[9px] rounded-[50%] w-10"
                          size="smIcn"
                          variant="icbFillOrange400"
                        >
                          <Img
                            src="images/img_messagecircle1.svg"
                            className="h-5"
                            alt="messagecircleOne"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-start right-[0] rounded-[10px] shadow-bs4 top-[26%] w-[22%]">
                      <div className="bg-white_A700 flex flex-col items-center justify-start p-3 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text
                              className="font-normal not-italic text-blue_gray_300_01 text-left w-auto"
                              variant="body8"
                            >
                              Total Income
                            </Text>
                            <div className="flex flex-row gap-7 items-center justify-between w-full">
                              <Text
                                className="font-medium text-gray_900_04 text-left w-auto"
                                variant="body6"
                              >
                                $245.00
                              </Text>
                              <Img
                                src="images/img_barchart21.svg"
                                className="h-5 w-5"
                                alt="barchartTwentyOne"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bottom-[2%] cursor-pointer flex items-center justify-center left-[3%] mb-[13px] min-w-[302px] ml-[18px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_circle_1.svg"
                          className="mb-px mr-4 bottom-[0] right-[2%] absolute"
                          alt="circle 1"
                        />
                      }
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBlack9000c"
                    >
                      <div className="font-normal leading-[normal] not-italic text-gray_900_04 text-left text-lg tracking-[-0.54px]">
                        Software analysis completed
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[-1px] mx-auto md:pl-10 sm:pl-5 pl-[131px] pt-[131px] w-full z-[1]">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-40 items-center justify-start mb-[66px] self-stretch w-auto md:w-full">
                <div className="flex flex-col gap-10 items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-indigo_A200 flex flex-col items-center justify-start rounded-[20px] w-full">
                        <div className="h-[316px] relative w-full">
                          <div className="h-[316px] m-auto w-full">
                            <Img
                              src="images/img_photo_316x851.png"
                              className="absolute h-[316px] inset-y-[0] my-auto object-cover right-[0] rounded-[20px] w-3/4"
                              alt="photo_One"
                            />
                            <Img
                              src="images/img_photo_316x968.png"
                              className="absolute h-[316px] inset-y-[0] left-[0] my-auto object-cover rounded-[20px] w-[85%]"
                              alt="photo_Two"
                            />
                          </div>
                          <div className="absolute flex flex-col gap-2.5 h-max inset-[0] items-center justify-start m-auto self-stretch w-auto">
                            <Text
                              className="font-spacegrotesk text-left text-white_A700 w-auto"
                              as="h3"
                              variant="h3"
                            >
                              What we look to Identify
                            </Text>
                            <Text
                              className="font-avenirnext font-medium leading-[160.00%] max-w-[953px] md:max-w-full text-center text-white_A700"
                              variant="body3"
                            >
                              We then undertake a tech audit of your business to
                              identify risks and gaps in critical aspects of
                              your business in relation to:
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ServicesColumnidentifyOne className="flex flex-col gap-3 items-start justify-start self-stretch w-auto md:w-full" />
                </div>
                <div className="flex md:flex-col flex-row font-spacegrotesk md:gap-10 gap-[87px] items-center justify-start self-stretch w-auto md:w-full">
                  <div className="md:h-[218px] h-[327px] relative w-[52%] md:w-full">
                    <div className="absolute flex flex-col gap-5 items-start justify-start left-[0] self-stretch top-[0] w-auto">
                      <Text
                        className="font-spacegrotesk leading-[126.00%] text-left text-light_blue_A700_01"
                        as="h3"
                        variant="h3"
                      >
                        <>
                          What we <br />
                          recommend
                        </>
                      </Text>
                      <Text
                        className="font-avenirnext font-medium leading-[160.00%] max-w-[420px] md:max-w-full text-blue_gray_600 text-left"
                        variant="body6"
                      >
                        We recommend a plan and agree a course of action that
                        meets your need and fits within your budget. This will
                        cover such areas as:
                      </Text>
                    </div>
                    <Img
                      src="images/img_pattern.svg"
                      className="absolute bottom-[0] h-[131px] right-[0] w-auto"
                      alt="pattern"
                    />
                  </div>
                  <div className="flex flex-col gap-7 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        size="mdIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_reply.svg"
                          className="h-[30px]"
                          alt="reply"
                        />
                      </Button>
                      <Text
                        className="font-medium leading-[160.00%] text-blue_gray_600 text-left"
                        variant="body4"
                      >
                        <>
                          Proof of concept, wireframe, <br />
                          prototype or agile plan
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        size="mdIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_piechart1.svg"
                          className="h-[30px]"
                          alt="piechartOne"
                        />
                      </Button>
                      <Text
                        className="font-medium text-blue_gray_600 text-left w-auto"
                        variant="body4"
                      >
                        Cost estimate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        size="mdIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_clock_orange_a700.svg"
                          className="h-[29px]"
                          alt="clock"
                        />
                      </Button>
                      <Text
                        className="font-medium text-blue_gray_600 text-left w-auto"
                        variant="body4"
                      >
                        Time estimate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        size="mdIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_command1.svg"
                          className="h-[30px]"
                          alt="commandOne"
                        />
                      </Button>
                      <Text
                        className="font-medium text-blue_gray_600 text-left w-auto"
                        variant="body4"
                      >
                        Resources required
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_ellipse37_3.png"
                className="sm:flex-1 h-[376px] md:h-auto md:mt-0 mt-[853px] object-cover w-auto sm:w-full"
                alt="ellipseThirtySeven_One"
              />
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col font-spacegrotesk items-center justify-center mt-[-1px] mx-auto p-[138px] md:px-10 sm:px-5 w-full z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-center justify-start my-[13px] self-stretch w-auto md:w-full">
              <div className="md:h-[409px] h-[522px] relative w-3/5 md:w-full">
                <div className="absolute bg-blue_50 h-[409px] inset-x-[0] mx-auto rounded-[20px] top-[0] w-full"></div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[523px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_photo_354x523.png"
                      className="h-[354px] md:h-auto object-cover rounded-[20px] w-full"
                      alt="photo_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-spacegrotesk leading-[126.00%] max-w-[360px] md:max-w-full text-blue_600 text-left"
                    as="h3"
                    variant="h3"
                  >
                    What we implement
                  </Text>
                  <Text
                    className="font-avenirnext font-medium max-w-[399px] md:max-w-full text-blue_gray_600 text-left"
                    variant="body6"
                  >
                    Lastly, we implement solutions focussed on optimising
                    productivity and growth. These include:
                  </Text>
                </div>
                <ServicesDigitalDropDownImplementanime
                  className="flex flex-col gap-4 items-end justify-start self-stretch w-auto sm:w-full"
                  digitalmarketinOne="digital marketing solutions"
                  searchengineoptOne="Search Engine Optimization (SEO)"
                  customerrelatioOne="Customer Relationship Management (CRM) and leads generation"
                  payperclickadveOne="Pay-per-click advertisement"
                  socialmediamarkOne="Social media marketing"
                  contentmarketinOne="Content marketing"
                  emailmarketing="Email marketing"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_900 flex font-inter items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesdigitaldropdownPage;
