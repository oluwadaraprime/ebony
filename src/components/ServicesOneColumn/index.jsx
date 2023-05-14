import React from "react";

import { Button, Img, List, Text } from "components";

const ServicesOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start self-stretch w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray_800 flex flex-col gap-6 items-center justify-center outline outline-[1px] outline-blue_gray_800 pb-5 pt-2 px-2 rounded-[20px] self-stretch w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
                    <div className="h-[329px] relative w-full">
                      <Img
                        src="images/img_photo_329x385.png"
                        className="absolute h-[329px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                        alt="photo"
                      />
                      <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[20px] w-full">
                        <Button
                          className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[256px] ml-0.5 md:ml-[0] mt-[246px] text-base text-center text-gray_900_01 w-auto"
                          shape="CircleBorder24"
                          size="md"
                          variant="OutlineBlack9003f"
                        >
                          {props?.webAndAppDevelopment}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-white_A700"
                variant="body6"
              >
                {props?.description}
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col gap-6 items-center justify-center outline outline-[1px] outline-blue_gray_200 pb-5 pt-2 px-2 rounded-[20px] self-stretch w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="h-[328px] relative w-full">
                    <Img
                      src="images/img_photo_3.png"
                      className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                      <Button
                        className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[220px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                        shape="CircleBorder24"
                        size="md"
                        variant="OutlineBlack9003f_1"
                      >
                        {props?.digitalTransformation}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-gray_600"
                variant="body6"
              >
                {props?.description1}
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col gap-6 items-center justify-center outline outline-[1px] outline-blue_gray_200 pb-5 pt-2 px-2 rounded-[20px] self-stretch w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="h-[328px] relative w-full">
                    <Img
                      src="images/img_photo_4.png"
                      className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                      <Button
                        className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[182px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                        shape="CircleBorder24"
                        size="md"
                        variant="OutlineBlack9003f_1"
                      >
                        {props?.digitalMarketing}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-gray_600"
                variant="body6"
              >
                {props?.description2}
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[173px] items-start justify-start w-[91%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[38px] grid md:grid-cols-1 grid-cols-2 justify-start self-stretch w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-col gap-10 items-center justify-center outline outline-[1px] outline-blue_gray_200 pb-14 pt-2 px-2 rounded-[20px] self-stretch w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[328px] relative w-full">
                        <Img
                          src="images/img_pexelstimamir.png"
                          className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                          alt="pexelstimamir"
                        />
                        <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                          <Button
                            className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[164px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                            shape="CircleBorder24"
                            size="md"
                            variant="OutlineBlack9003f_1"
                          >
                            {props?.cyberSecurity}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-gray_600"
                  variant="body6"
                >
                  {props?.description3}
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col gap-6 items-center justify-center outline outline-[1px] outline-blue_gray_200 pb-5 pt-2 px-2 rounded-[20px] self-stretch w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
                    <div className="h-[328px] relative w-full">
                      <Img
                        src="images/img_photo_2.png"
                        className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                        alt="photo"
                      />
                      <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                        <Button
                          className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[289px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                          shape="CircleBorder24"
                          size="md"
                          variant="OutlineBlack9003f_1"
                        >
                          {props?.techConsultancyAndSupport}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-gray_600"
                  variant="body6"
                >
                  {props?.description4}
                </Text>
              </div>
            </List>
            <Img
              src="images/img_triangleshapes.svg"
              className="h-[116px] md:mt-0 mt-[258px] w-auto"
              alt="triangleshapes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ServicesOneColumn.defaultProps = {
  webAndAppDevelopment: "Web and App Development",
  description:
    "It is one thing to build a product, it is another thing to build a product that customers want. At Ebony Technology we work closely with you to implement your ideas of building a functional, secured, viable and user-friendly web application or mobile app.",
  digitalTransformation: "Digital Transformation",
  description1:
    "The digital world is constantly evolving. We leverage our expertise to help you remain competitive through implementing digital solutions that will enable your business meet changing business and marketing requirements.",
  digitalMarketing: "Digital Marketing",
  description2:
    "Often times, a poor product well marketed will outsell a good product poorly marketed. We help improve your online visibility, brand awareness, search engine optimization, lead generation and other digital marketing metrics to grow your business.",
  cyberSecurity: "Cyber Security",
  description3:
    "One single security breach can bring profound loss for any business. We work with you to protect your business from spammers, cyber criminals and other malicious actors.",
  techConsultancyAndSupport: "Tech Consultancy and Support",
  description4:
    "The role of technology in business is indispensable yet many businesses do not have the type of support they require to thrive. At Ebony Technology, we provide consultancy, support, troubleshooting and ongoing maintenance for businesses.",
};

export default ServicesOneColumn;
