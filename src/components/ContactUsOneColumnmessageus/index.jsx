import React from "react";

import { Text } from "components";

const ContactUsOneColumnmessageus = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize font-bold font-mulish text-gray_900_05 text-left w-auto"
          variant="body4"
        >
          {props?.messageus}
        </Text>
        <div className="bg-white_A700 border border-blue_gray_200 border-solid flex flex-col h-[252px] md:h-auto items-start justify-start max-w-[931px] px-5 py-7 rounded-[20px] w-full">
          <Text
            className="font-avenirnext font-normal not-italic text-gray_600 text-left w-auto"
            variant="body4"
          >
            {props?.hellothereiwoulOne}
          </Text>
        </div>
      </div>
    </>
  );
};

ContactUsOneColumnmessageus.defaultProps = {
  messageus: "Message Us *",
  hellothereiwoulOne: "Hello there, I would like to talk about how to...",
};

export default ContactUsOneColumnmessageus;
