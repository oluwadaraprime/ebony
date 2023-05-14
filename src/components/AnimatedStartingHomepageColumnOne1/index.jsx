import React from "react";

import { Text } from "components";

const AnimatedStartingHomepageColumnOne1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start self-stretch w-auto">
          <Text
            className="font-spacegrotesk leading-[126.00%] max-w-[17px] md:max-w-full text-left text-white_A700"
            as="h4"
            variant="h4"
          >
            {props?.ourforwardthinkOne}
          </Text>
        </div>
      </div>
    </>
  );
};

AnimatedStartingHomepageColumnOne1.defaultProps = {
  ourforwardthinkOne:
    "Our forward-thinking digital agency helps you break new ground",
};

export default AnimatedStartingHomepageColumnOne1;
