import React from "react";

import { Text } from "components";

const ContactUsOneInputfield2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <Text
            className="capitalize font-avenirnext font-bold text-gray_900_05 text-left w-auto"
            variant="body4"
          >
            {props?.companyname}
          </Text>
        </div>
        <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-start justify-end p-[21px] sm:px-5 rounded-[20px] w-full">
          <Text
            className="font-avenirnext font-normal mt-[9px] not-italic text-gray_600 text-left w-auto"
            variant="body4"
          >
            {props?.yourcompanynameOne}
          </Text>
        </div>
      </div>
    </>
  );
};

ContactUsOneInputfield2.defaultProps = {
  companyname: "company name*",
  yourcompanynameOne: "your company name",
};

export default ContactUsOneInputfield2;
