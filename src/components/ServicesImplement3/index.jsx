import React from "react";

import { Img, Text } from "components";

const ServicesImplement3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
          variant="body6"
        >
          {props?.technicalsupporOne}
        </Text>
        <Img
          src="images/img_arrowdown.svg"
          className="h-6 w-6"
          alt="arrowdown_Three"
        />
      </div>
    </>
  );
};

ServicesImplement3.defaultProps = {
  technicalsupporOne: "technical support plan",
};

export default ServicesImplement3;
