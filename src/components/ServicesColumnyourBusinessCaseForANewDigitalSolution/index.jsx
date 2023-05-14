import React from "react";

import { Button, Img, Text } from "components";

const ServicesColumnyourBusinessCaseForANewDigitalSolution = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[401px] sm:min-w-full w-auto"
          leftIcon={
            <Img
              src="images/img_checkmark_orange_a700.svg"
              className="mr-2"
              alt="checkmark"
            />
          }
          size="sm"
          variant="OutlineOrangeA700"
        >
          <div className="font-medium font-spacegrotesk leading-[normal] text-base text-gray_900_01 text-left">
            {props?.yourBusinessCaseForANewDigitalSolution}
          </div>
        </Button>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto md:w-full">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Five"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.yourexistingwebOne}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto sm:w-full">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Six"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.theexistingsoftOne}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Seven"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.yourbusinessproOne}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Eight"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.yoursocialmediaOne}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Nine"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.yourpayperclickOne}
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start px-2 py-1 self-stretch w-auto sm:w-full">
          <Img
            src="images/img_checkmark_orange_a700.svg"
            className="h-8 w-8"
            alt="checkmark_Ten"
          />
          <Text
            className="font-normal font-spacegrotesk not-italic text-gray_900_01 text-left w-auto"
            variant="body6"
          >
            {props?.yourinformationOne}
          </Text>
        </div>
      </div>
    </>
  );
};

ServicesColumnyourBusinessCaseForANewDigitalSolution.defaultProps = {
  yourBusinessCaseForANewDigitalSolution:
    "Your business case for a new digital solution",
  yourexistingwebOne:
    "Your existing website, web application or app to be revamped",
  theexistingsoftOne: "The existing software solutions you utilise",
  yourbusinessproOne: "Your business processes",
  yoursocialmediaOne: "Your social media platforms",
  yourpayperclickOne: "Your Pay-per-click adverts accounts",
  yourinformationOne: "Your information storage and sharing architecture",
};

export default ServicesColumnyourBusinessCaseForANewDigitalSolution;
