import React from "react";

import { Input, Text } from "components";

const ServicesColumnidentifyOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="w-[73%]"
          className="font-avenirnext font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray_900_01 sm:text-xl text-2xl text-gray_900_01 text-left w-full"
          name="identify_One"
          placeholder="Requirements for developing your digital solution"
          shape="RoundedBorder4"
          size="sm"
          variant="OutlineGray50026"
        ></Input>
        <div className="flex flex-col items-center justify-start px-4 py-2 self-stretch w-auto md:w-full">
          <Text
            className="font-avenirnext font-normal not-italic text-blue_gray_600 text-left w-auto"
            variant="body3"
          >
            {props?.risksandvulneraOne}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start px-4 py-2 self-stretch w-auto sm:w-full">
          <Text
            className="font-avenirnext font-normal not-italic text-blue_gray_600 text-left w-auto"
            variant="body3"
          >
            {props?.yourbusinessproThree}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start px-4 py-2 self-stretch w-auto md:w-full">
          <Text
            className="font-avenirnext font-normal not-italic text-blue_gray_600 text-left w-auto"
            variant="body3"
          >
            {props?.timezone}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start px-4 py-2 self-stretch w-auto md:w-full">
          <Text
            className="font-avenirnext font-normal not-italic text-blue_gray_600 text-left w-auto"
            variant="body3"
          >
            {props?.growthhackinganOne}
          </Text>
        </div>
      </div>
    </>
  );
};

ServicesColumnidentifyOne.defaultProps = {
  risksandvulneraOne:
    "Risks and vulnerabilities in your digital solutions and business processes",
  yourbusinessproThree: "Your business processes that can be automated",
  timezone: "Cost saving measures achievable through technology",
  growthhackinganOne:
    "Growth hacking and productivity techniques suitable for your business",
};

export default ServicesColumnidentifyOne;
