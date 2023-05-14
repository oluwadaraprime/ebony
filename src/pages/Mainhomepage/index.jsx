import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AnimatedStartingHomepageColumnOne from "components/AnimatedStartingHomepageColumnOne";
import AnimatedStartingHomepageFooternew from "components/AnimatedStartingHomepageFooternew";
import AnimatedStartingHomepageHeader from "components/AnimatedStartingHomepageHeader";
import AnimatedStartingHomepageServices from "components/AnimatedStartingHomepageServices";
import AnimatedStartingHomepageServices1 from "components/AnimatedStartingHomepageServices1";
import AnimatedStartingHomepageServices2 from "components/AnimatedStartingHomepageServices2";
import AnimatedStartingHomepageServices3 from "components/AnimatedStartingHomepageServices3";
import AnimatedStartingHomepageTertiarybutton from "components/AnimatedStartingHomepageTertiarybutton";
import AnimatedStartingHomepageTestimonials from "components/AnimatedStartingHomepageTestimonials";
import MainHomepageStackhappyguytwo from "components/MainHomepageStackhappyguytwo";

const MainhomepagePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-spacegrotesk sm:gap-10 md:gap-10 gap-[81px] items-center justify-start mx-auto w-full">
        <div className="sm:h-[2630px] md:h-[2708px] h-[3566px] md:px-5 relative w-full">
          <div className="sm:h-[2630px] md:h-[2708px] h-[3566px] m-auto sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] sm:w-[10%] w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[1133px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="h-[1028px] md:h-[642px] relative sm:top-[] w-full">
                <div className="h-[1028px] md:h-[642px] m-auto w-full">
                  <div className="absolute h-[1028px] md:h-[642px] inset-y-[0] my-auto right-[0] w-[55%] md:w-full">
                    <div className="absolute bottom-[0] md:h-[634px] h-[801px] inset-x-[0] mx-auto w-full">
                      <Img
                        src="images/img_aboutuswireframe.png"
                        className="absolute h-[581px] object-cover right-[0] top-[0] w-auto sm:w-full"
                        alt="wireframerOne"
                      />
                      <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
                    </div>
                    <div className="absolute h-[642px] right-[0] top-[0] w-[68%] sm:w-full">
                      <Img
                        src="images/img_ellipse37_1.png"
                        className="h-[642px] m-auto object-cover w-full"
                        alt="ellipseThirtySeven"
                      />
                      <Img
                        src="images/img_trash.svg"
                        className="absolute bottom-[36%] h-[59px] right-[38%] w-[59px]"
                        alt="trash"
                      />
                    </div>
                  </div>
                  <AnimatedStartingHomepageHeader
                    className="absolute border border-blue_100 border-solid flex flex-row flex-wrap font-spacegrotesk inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full"
                    getInTouch="get in touch"
                  />
                  <Text
                    className="absolute sm:bottom-[] sm:flex-row font-spacegrotesk sm:inline sm:items-center sm:justify-center leading-[126.00%] sm:left-[15px] left-[8%] sm:right-[] sm:text-3xl text-left text-white_A700 top-[23%] sm:top-[250px] w-[39%] sm:w-full"
                    as="h3"
                    variant="h3"
                  >
                    Our forward-thinking digital agency helps you break new
                    ground
                  </Text>
                  <Text
                    className="absolute capitalize font-avenirnext font-medium leading-[160.00%] sm:left-[15px] left-[8%] text-left text-white_A700 top-[44%] sm:top-[59%] w-[36%] sm:w-full"
                    variant="body4"
                  >
                    We create digital solutions that support businesses to
                    launch, run and grow.
                  </Text>
                </div>
                <Button
                  className="absolute bottom-[38%] capitalize cursor-pointer font-medium leading-[normal] left-[8%] sm:m-[] sm:mb-[-120px] min-w-[193px] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] sm:pt-4 text-2xl md:text-[22px] text-center text-gray_900_01 sm:text-xl sm:top-[] w-auto"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="FillOrange400"
                >
                  contact us
                </Button>
              </div>
              <div className="bg-lime_50 flex flex-col items-center justify-end pt-[76px] w-full">
                <div className="flex md:flex-col flex-row gap-[33px] items-end justify-between w-full">
                  <Img
                    src="images/img_aboutusimage.png"
                    className="md:flex-1 h-[684px] sm:h-auto md:mt-0 mt-[95px] object-cover w-auto md:w-full"
                    alt="aboutusimage"
                  />
                  <div className="flex md:flex-1 flex-col justify-start w-auto md:w-full">
                    <Img
                      src="images/img_eye.svg"
                      className="h-20 md:ml-[0] ml-[525px] w-auto"
                      alt="eye"
                    />
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[58px] w-full">
                      <div className="flex md:flex-1 flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                        <Text
                          className="text-blue_gray_900 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          About us
                        </Text>
                        <div className="flex flex-col font-avenirnext gap-8 items-start justify-start self-stretch w-auto md:w-full">
                          <Text
                            className="capitalize font-normal leading-[160.00%] max-w-[607px] md:max-w-full not-italic text-blue_gray_800 text-left"
                            variant="body3"
                          >
                            We are a UK tech company creating digital solutions
                            that support businesses and organisations across the
                            world to launch, run and grow. We achieve this by
                            working closely with our clients to understand, not
                            assume their requirements. We then combine this
                            information with business intelligence to turn our
                            clients’ problems into solutions.
                          </Text>
                          <AnimatedStartingHomepageTertiarybutton
                            className="flex flex-row gap-2 items-center justify-start p-3 self-stretch w-auto sm:w-full"
                            learnmore="Learn More"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_spiral.png"
                        className="sm:flex-1 h-[439px] md:h-auto object-cover w-auto sm:w-full"
                        alt="spiral"
                      />
                    </div>
                    <Img
                      src="images/img_eclipse.svg"
                      className="h-[84px] md:ml-[0] ml-[82px] mt-[117px] w-auto"
                      alt="eclipse"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col font-avenirnext inset-x-[0] items-center justify-end mx-auto pt-[562px] w-full">
              <div className="flex h-[554px] md:h-[645px] justify-end relative w-full">
                <div className="bg-white_A700 h-[645px] mt-auto mx-auto w-full"></div>
                <AnimatedStartingHomepageTestimonials
                  className="absolute bottom-[0] h-[467px] inset-x-[0] mx-auto w-[1178px] md:w-full"
                  testimonials="Testimonials"
                  one="“"
                  descriptionOne={
                    <>
                      Overall, I highly recommend ebony technology to any
                      business looking for a tech consultancy and support
                      provider. Their expertise and commitment to excellence
                      have been essential in helping our business stay ahead of
                      the curve, and I&#39;m grateful for their partnership.
                    </>
                  }
                  jamestoriff="James Toriff"
                />
              </div>
            </div>
            <MainHomepageStackhappyguytwo
              className="absolute sm:font-avenirnext font-inter h-[736px] right-[8%] sm:text-left sm:text-xs top-[4%] w-[57%] md:w-full"
              languageOne="Total  Project"
              twohundred="200+"
            />
          </div>
          <div className="absolute bg-gray_50 flex flex-col gap-[41px] inset-x-[0] justify-start mx-auto sm:pl-5 pl-8 py-8 top-[23%] w-full">
            <Img
              src="images/img_eye_blue_100.svg"
              className="h-[79px] mt-[7px] w-auto"
              alt="eye_One"
            />
            <div className="sm:h-[1910px] md:h-[1994px] h-[980px] mb-[183px] md:ml-[0] ml-[68px] relative w-[96%] md:w-full">
              <div className="absolute bottom-[1%] flex flex-col right-[0] w-[14%]">
                <Line className="bg-purple_A200_33 h-[26px] mx-auto rotate-[45deg] w-full" />
                <Line className="bg-indigo_A100_33 h-[55px] ml-auto mr-[25px] mt-[-14.13px] rotate-[40deg] w-1/2 z-[1]" />
              </div>
              <div className="absolute flex flex-col gap-[50px] h-full inset-y-[0] items-center justify-start left-[0] my-auto self-stretch w-auto">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[243px] items-center justify-between self-stretch w-auto md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="max-w-[416px] md:max-w-full text-gray_900_01 text-left"
                      as="h6"
                      variant="h6"
                    >
                      You want to boost your business growth?
                    </Text>
                    <div className="flex flex-row font-avenirnext gap-[18px] items-center justify-start self-stretch w-auto">
                      <Text
                        className="capitalize font-medium text-gray_900_01 text-left w-auto"
                        variant="body3"
                      >
                        worry less solution is here
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-8 w-8"
                        alt="arrowright_One"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal leading-[160.00%] max-w-[581px] md:max-w-full not-italic text-blue_gray_600 text-left"
                    variant="body3"
                  >
                    Our passion is not just to create digital products but
                    creating the kind of products that offer utility to our
                    clients and their patrons.{" "}
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[82px] items-start justify-start self-stretch w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-11 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start self-stretch w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <AnimatedStartingHomepageColumnOne
                      className="flex flex-col gap-[22px] items-start justify-start self-stretch w-auto sm:w-full"
                      webAndAppDevelopment="Web and App Development"
                    />
                    <AnimatedStartingHomepageServices
                      className="flex flex-col items-center justify-start w-full"
                      digitalTransformation="Digital Transformation"
                    />
                    <AnimatedStartingHomepageServices1
                      className="flex flex-col items-center justify-start w-full"
                      digitalMarketing="Digital Marketing"
                    />
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-11 grid md:grid-cols-1 grid-cols-2 justify-start self-stretch w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <AnimatedStartingHomepageServices2
                      className="flex flex-col items-center justify-start w-full"
                      cyberSecurity="Cyber Security"
                    />
                    <AnimatedStartingHomepageServices3
                      className="flex flex-col items-center justify-start w-full"
                      techConsultancyAndSupport="Tech Consultancy and Support"
                    />
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatedStartingHomepageFooternew
          className="bg-gray_900 flex font-inter items-center justify-center sm:p-[] sm:pb-[90px] sm:pt-[] md:px-5 w-full"
          copyright2022="© Copyright 2022, All Rights Reserved by Nagency"
          wecreatedigitalOne="We create digital solutions that support businesses to launch, run and grow."
          p25courtneyroad="25 Courtney Road, Grays, Essex, UK RM16 4TZ"
          p440772761="+44 (0) 772 761 8504"
          p2022ebonytechno="© 2023 Ebony Technology. Copyright and rights reserved"
          wewillliketo="We will like to send you newsletters about our products, offers and services."
        />
      </div>
    </>
  );
};

export default MainhomepagePage;
