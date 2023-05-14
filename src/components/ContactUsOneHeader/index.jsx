import React from "react";

import { Img, Text } from "components";

const ContactUsOneHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_ebonylogofordark.png"
          className="h-[63px] md:h-auto object-cover w-[50px] sm:w-full"
          alt="ebonylogofordar"
        />
        <div className="flex sm:flex-col flex-row gap-10 items-center justify-start self-stretch w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <Text
              className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
              variant="body4"
            >
              {props?.home}
            </Text>
          </div>
          <div className="flex flex-row gap-10 items-center justify-center self-stretch w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body4"
              >
                {props?.aboutus}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-bold font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body3"
              >
                {props?.contact}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                variant="body4"
              >
                {props?.language}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsOneHeader.defaultProps = {
  home: "home",
  aboutus: "about us",
  contact: "contact",
  language: "services ",
};

export default ContactUsOneHeader;
