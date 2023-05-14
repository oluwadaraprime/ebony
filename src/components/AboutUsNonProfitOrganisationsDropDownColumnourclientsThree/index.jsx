import React from "react";

import { Img, Input, SelectBox, Text } from "components";

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

const AboutUsNonProfitOrganisationsDropDownColumnourclientsThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <SelectBox
            className="font-medium font-spacegrotesk leading-[normal] text-base text-left text-white_A700 w-full"
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
                className="capitalize font-medium font-spacegrotesk leading-[normal] p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
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
          className="capitalize font-medium font-spacegrotesk leading-[normal] text-base text-left text-white_A700 w-full"
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
        <div className="bg-white_A700 border border-blue_gray_200 border-solid flex flex-col gap-0.5 items-start justify-start rounded-[12px] self-stretch w-auto md:w-full">
          <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-4 rounded-bl-none rounded-br-none rounded-tl-[12px] rounded-tr-[12px] w-[397px] md:w-full">
            <Text
              className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
              variant="body6"
            >
              {props?.nonprofitorganiOne}
            </Text>
            <Img
              src="images/img_arrowup.svg"
              className="h-6 w-6"
              alt="arrowup"
            />
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start pl-3 md:pr-10 sm:pr-5 pr-[145px] py-3 rounded-bl rounded-br rounded-tl-none rounded-tr-none shadow-bs3 w-[397px] md:w-full">
            <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
              <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                <Text
                  className="font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                  variant="body7"
                >
                  {props?.ngos}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                <Text
                  className="capitalize font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                  variant="body7"
                >
                  {props?.charities}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                <Text
                  className="capitalize font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                  variant="body7"
                >
                  {props?.clubs}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                <Text
                  className="capitalize font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                  variant="body7"
                >
                  {props?.associations}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-2 py-1 self-stretch w-auto">
                <Text
                  className="capitalize font-avenirnext font-medium text-blue_gray_600 text-left w-auto"
                  variant="body7"
                >
                  {props?.faithorganizatiOne}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsNonProfitOrganisationsDropDownColumnourclientsThree.defaultProps = {
  nonprofitorganiOne: "Non Profit Organisations",
  ngos: "NGOs",
  charities: "charities",
  clubs: "clubs",
  associations: "associations",
  faithorganizatiOne: "faith organizations",
};

export default AboutUsNonProfitOrganisationsDropDownColumnourclientsThree;
