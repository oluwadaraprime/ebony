import React from "react";

import { Img, Input, SelectBox, Text } from "components";

const descriptionThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const implementThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const implementFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ServicesWebAppDropdownImplementanime = (props) => {
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
        <div className="bg-white_A700 border border-blue_gray_200 border-solid flex flex-col gap-0.5 items-start justify-start rounded-[12px] self-stretch w-auto md:w-full">
          <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-4 rounded-bl-none rounded-br-none rounded-tl-[12px] rounded-tr-[12px] w-[397px] md:w-full">
            <Text
              className="font-medium font-spacegrotesk text-left text-white_A700 w-auto"
              variant="body6"
            >
              {props?.webapplication}
            </Text>
            <Img
              src="images/img_arrowup.svg"
              className="h-6 w-6"
              alt="arrowup"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white_A700 flex flex-col gap-1 items-start justify-start pl-3 md:pr-10 sm:pr-5 pr-[212px] py-3 rounded-bl rounded-br rounded-tl-none rounded-tr-none self-stretch shadow-bs3 w-auto md:w-full">
                <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.enterpriseappliOne}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.ecommerce}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-1 self-stretch w-auto">
                  <Text
                    className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                    variant="body7"
                  >
                    {props?.onlinetraining}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input
          wrapClassName="w-full"
          className="capitalize font-medium font-spacegrotesk leading-[normal] p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
          name="implement_Two"
          placeholder="mobile app"
          shape="RoundedBorder12"
          size="lg"
          variant="FillBluegray900"
        ></Input>
        <SelectBox
          className="capitalize font-medium font-spacegrotesk leading-[normal] max-w-[397px] text-base text-left text-white_A700"
          placeholderClassName="text-white_A700"
          indicator={
            <Img
              src="images/img_arrowdown.svg"
              className="h-6 w-6"
              alt="arrow_down"
            />
          }
          size="md"
          isSearchable={false}
          placeholder={`onboarding your business on existing
situable software solution`}
          shape="RoundedBorder16"
          isMulti={false}
          options={descriptionThreeOptionsList}
          name="description_Three"
          variant="FillBluegray900"
        />
        <SelectBox
          className="capitalize font-medium font-spacegrotesk leading-[normal] text-base text-left text-white_A700 w-full"
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
          placeholder="digital marketing solutions"
          shape="RoundedBorder12"
          isMulti={false}
          options={implementThreeOptionsList}
          name="implement_Three"
          variant="FillBluegray900"
        />
        <SelectBox
          className="capitalize font-medium font-spacegrotesk leading-[normal] text-base text-left text-white_A700 w-full"
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
          placeholder="technical support plan"
          shape="RoundedBorder12"
          isMulti={false}
          options={implementFourOptionsList}
          name="implement_Four"
          variant="FillBluegray900"
        />
      </div>
    </>
  );
};

ServicesWebAppDropdownImplementanime.defaultProps = {
  webapplication: "Web application",
  enterpriseappliOne: "Enterprise application",
  ecommerce: "E-Commerce",
  onlinetraining: "Online Training Platform",
};

export default ServicesWebAppDropdownImplementanime;
