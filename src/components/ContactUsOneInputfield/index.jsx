import React from "react";

import { Text } from "components";

const ContactUsOneInputfield = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-center justify-end m-auto self-stretch w-auto md:w-full">
          <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-start justify-start p-[22px] sm:px-5 rounded-[20px] w-full">
            <Text
              className="font-mulish font-normal lowercase my-[3px] not-italic text-gray_600 text-left w-auto"
              variant="body4"
            >
              {props?.johndavid}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto md:w-full">
          {!!props?.fullname ? (
            <Text
              className="capitalize font-avenirnext font-bold text-gray_900_05 text-left w-auto"
              variant="body4"
            >
              {props?.fullname}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

ContactUsOneInputfield.defaultProps = { johndavid: "John David" };

export default ContactUsOneInputfield;
