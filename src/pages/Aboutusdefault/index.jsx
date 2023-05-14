import React from "react";

import { Img, Input, SelectBox, Text } from "components";
import AboutUsDefaultHeader from "components/AboutUsDefaultHeader";
import AnimatedStartingHomepageFooternew from "components/AnimatedStartingHomepageFooternew";

const ourclientsOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ourclientsThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ourclientsFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AboutusdefaultPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-spacegrotesk items-center justify-start mx-auto w-full">
        <div className="md:h-[1511px] h-[1779px] sm:h-[958px] md:px-5 relative w-full">
          <div className="absolute h-[1028px] md:h-[642px] right-[0] top-[0] w-[55%] md:w-full">
            <div className="absolute bottom-[0] md:h-[634px] h-[801px] inset-x-[0] mx-auto w-full">
              <Img
                src="images/img_aboutuswireframe.png"
                className="absolute h-[581px] object-cover right-[0] top-[0] w-auto"
                alt="wireframerOne"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
            </div>
            <Img
              src="images/img_ellipse37_7.png"
              className="absolute h-[642px] object-cover right-[0] top-[0] w-[68%]"
              alt="ellipseThirtySeven"
            />
          </div>
          <AboutUsDefaultHeader
            className="absolute border border-blue_100 border-solid flex flex-row flex-wrap inset-x-[0] items-center justify-between max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full"
            getInTouch="get in touch"
          />
          <Text
            className="absolute left-[36%] text-left text-white_A700 top-[22%] w-auto"
            as="h3"
            variant="h3"
          >
            About us
          </Text>
          <div className="absolute bg-lime_50 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[50px] pt-[50px] w-full">
            <div className="flex flex-col md:gap-10 gap-[65px] justify-start w-[99%] md:w-full">
              <Img
                src="images/img_download.svg"
                className="h-[76px] md:ml-[0] ml-[1155px] w-auto"
                alt="download"
              />
              <div className="flex md:flex-col flex-row gap-[26px] items-start justify-between w-full">
                <Img
                  src="images/img_aboutusimage.png"
                  className="md:flex-1 h-[761px] sm:h-auto md:mt-0 mt-1.5 object-cover w-auto md:w-full"
                  alt="happywhitewoman"
                />
                <div className="md:h-[558px] sm:h-[659px] h-[714px] relative w-[62%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[78%]">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Img
                        src="images/img_eclipse.svg"
                        className="h-[180px] sm:mt-0 mt-[220px] w-[181px]"
                        alt="group35270"
                      />
                      <Img
                        src="images/img_group.png"
                        className="sm:flex-1 h-[439px] md:h-auto object-cover w-auto sm:w-full"
                        alt="group"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-10 items-start justify-start left-[0] self-stretch top-[0] w-auto">
                    <Text
                      className="font-spacegrotesk text-gray_900_01 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      About Ebony Technology
                    </Text>
                    <Text
                      className="font-avenirnext font-medium leading-[160.00%] text-blue_gray_800 text-left"
                      variant="body3"
                    >
                      <>
                        We are a UK tech company creating digital solutions that
                        support businesses and organisations across the world to
                        launch, run and grow. We achieve this by working closely
                        with our clients to understand, not assume their
                        requirements. We then combine this information with
                        business intelligence to turn our clients’ problems into
                        solutions.
                        <br />
                        Our team comprises business-minded professionals with
                        expertise in software engineering, UI/UX design, web and
                        mobile development, growth hacking, database system
                        administration, cyber security, digital marketing and
                        entrepreneurship.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector32.svg"
            className="absolute h-[22px] left-[35%] top-[26%] w-auto"
            alt="vectorThirtyTwo"
          />
        </div>
        <div className="bg-gray_50 flex flex-col items-center justify-start p-[79px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1116px] mb-[47px] mx-auto self-stretch w-full">
            <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
              <Text
                className="font-spacegrotesk text-gray_900_01 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Our Clients
              </Text>
              <Text
                className="font-avenirnext font-normal leading-[160.00%] not-italic text-blue_gray_800 text-left"
                variant="body3"
              >
                <>
                  Our passion is not just to create digital products but
                  creating the kind of products that offer utility to our
                  clients and their patrons. Our strength comes from paying
                  attention to what the user wants and prioritizing development
                  activities focused on gaining traction.
                  <br />
                  Although we are a UK company, we serve clients from around the
                  world across different industries. In particular we cater for
                  the following categories of clients:
                </>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-center justify-start self-stretch w-auto md:w-full">
              <div className="md:h-[404px] h-[469px] relative w-[55%] md:w-full">
                <Img
                  src="images/img_grid.svg"
                  className="absolute bottom-[0] h-[78px] left-[0] w-auto"
                  alt="grid"
                />
                <div className="absolute border border-black_900_01 border-solid flex flex-col items-center justify-start right-[0] rounded-[20px] top-[0] w-[93%]">
                  <Img
                    src="images/img_pexelsketutsu.png"
                    className="h-[404px] md:h-auto object-cover rounded-[20px] w-full"
                    alt="pexelsketutsu"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <SelectBox
                    className="font-medium leading-[normal] text-base text-left text-white_A700 w-full"
                    placeholderClassName="text-white_A700"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-6 mr-[0] w-6"
                        alt="arrow_down"
                      />
                    }
                    size="lg"
                    isSearchable={false}
                    placeholder="Businesses"
                    shape="RoundedBorder12"
                    isMulti={false}
                    options={ourclientsOneOptionsList}
                    name="ourclients_One"
                    variant="FillBluegray900"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Input
                        wrapClassName="w-full"
                        className="capitalize font-medium leading-[normal] p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                        name="ourclients_Two"
                        placeholder="Governments and Governmental agencies"
                        shape="RoundedBorder12"
                        size="md"
                        variant="FillBluegray900"
                      ></Input>
                    </div>
                  </div>
                </div>
                <SelectBox
                  className="capitalize font-medium leading-[normal] text-base text-left text-white_A700 w-full"
                  placeholderClassName="text-white_A700"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                  isSearchable={false}
                  placeholder="Educational Institutions"
                  shape="RoundedBorder12"
                  isMulti={false}
                  options={ourclientsThreeOptionsList}
                  name="ourclients_Three"
                  variant="FillBluegray900"
                />
                <SelectBox
                  className="capitalize font-medium leading-[normal] text-base text-left text-white_A700 w-full"
                  placeholderClassName="text-white_A700"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                  size="xl"
                  isSearchable={false}
                  placeholder="Non Profit Organisations"
                  shape="RoundedBorder12"
                  isMulti={false}
                  options={ourclientsFourOptionsList}
                  name="ourclients_Four"
                  variant="OutlineBluegray200"
                />
              </div>
            </div>
          </div>
        </div>
        <AnimatedStartingHomepageFooternew
          className="bg-gray_900 flex font-inter items-center justify-center md:px-5 w-full"
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

export default AboutusdefaultPage;
