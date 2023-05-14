import React from "react";

import { Img, Input, Text } from "components";

const ServicesDigitalDropDownImplementanime = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="w-full"
          className="font-medium font-spacegrotesk leading-[normal] p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
          name="implement_One"
          placeholder="Website"
          shape="RoundedBorder12"
          size="md"
          variant="FillBluegray900"
        ></Input>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-[18px] rounded-[12px] w-[397px] md:w-full">
              <Text
                className="font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body6"
              >
                {props?.webapplication}
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="h-6 w-6"
                alt="arrowdown"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="bg-blue_gray_900 capitalize font-medium font-spacegrotesk pl-5 pr-3 py-5 rounded-[12px] text-left text-white_A700 w-[397px]"
                variant="body6"
              >
                {props?.implementTwo}
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-3 rounded-[16px] w-[397px] md:w-full">
            <Text
              className="capitalize font-medium font-spacegrotesk text-left text-white_A700"
              variant="body6"
            >
              {props?.descriptionThree}
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="h-6 w-6"
              alt="arrowdown_One"
            />
          </div>
          <div className="bg-white_A700 border border-blue_gray_200 border-solid flex flex-col gap-0.5 items-start justify-start rounded-[12px] self-stretch w-auto md:w-full">
            <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-4 rounded-bl-none rounded-br-none rounded-tl-[12px] rounded-tr-[12px] w-[397px] md:w-full">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body6"
              >
                {props?.digitalmarketinOne}
              </Text>
              <Img
                src="images/img_arrowup.svg"
                className="h-6 w-6"
                alt="arrowup"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white_A700 flex flex-col gap-1 items-start justify-start pl-3 md:pr-10 sm:pr-5 pr-[88px] py-3 rounded-bl rounded-br rounded-tl-none rounded-tr-none self-stretch shadow-bs3 w-auto md:w-full">
                <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="capitalize font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.searchengineoptOne}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="capitalize font-avenirnext font-medium max-w-[281px] md:max-w-full text-blue_gray_600 text-left"
                    variant="body7"
                  >
                    {props?.customerrelatioOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.payperclickadveOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.socialmediamarkOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.contentmarketinOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.emailmarketing}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-[18px] rounded-[12px] w-[397px] md:w-full">
            <Text
              className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
              variant="body6"
            >
              {props?.technicalsupporOne}
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="h-6 w-6"
              alt="arrowdown_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ServicesDigitalDropDownImplementanime.defaultProps = {
  webapplication: "Web application",
  implementTwo: "mobile app",
  descriptionThree: (
    <>
      onboarding your business on existing
      <br />
      situable software solution
    </>
  ),
  digitalmarketinOne: "digital marketing solutions",
  searchengineoptOne: "Search Engine Optimization (SEO)",
  customerrelatioOne:
    "Customer Relationship Management (CRM) and leads generation",
  payperclickadveOne: "Pay-per-click advertisement",
  socialmediamarkOne: "Social media marketing",
  contentmarketinOne: "Content marketing",
  emailmarketing: "Email marketing",
  technicalsupporOne: "technical support plan",
};

export default ServicesDigitalDropDownImplementanime;
