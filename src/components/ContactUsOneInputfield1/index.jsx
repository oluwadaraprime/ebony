import React from "react";

import { Text } from "components";

const ContactUsOneInputfield1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-center justify-end m-auto self-stretch w-auto md:w-full">
          <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-start justify-start p-[22px] sm:px-5 rounded-[20px] w-full">
            <Text
              className="font-mulish font-normal lowercase mb-0.5 mt-[5px] not-italic text-gray_600 text-left w-auto"
              variant="body4"
            >
              {props?.email}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto md:w-full">
          {!!props?.youremail ? (
            <Text
              className="capitalize font-avenirnext font-bold text-gray_900_05 text-left w-auto"
              variant="body4"
            >
              {props?.youremail}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

ContactUsOneInputfield1.defaultProps = { email: "JohnDavidQ@gmail.com" };

export default ContactUsOneInputfield1;
