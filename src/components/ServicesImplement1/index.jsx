import React from "react";

import { Img, Text } from "components";

const ServicesImplement1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize font-medium font-spacegrotesk text-left text-white_A700"
          variant="body6"
        >
          {props?.descriptionFour}
        </Text>
        <Img
          src="images/img_arrowdown.svg"
          className="h-6 w-6"
          alt="arrowdown_One"
        />
      </div>
    </>
  );
};

ServicesImplement1.defaultProps = {
  descriptionFour: (
    <>
      onboarding your business on existing
      <br />
      situable software solution
    </>
  ),
};

export default ServicesImplement1;
