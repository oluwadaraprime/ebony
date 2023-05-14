import React from "react";

import { Img, Text } from "components";

const ServicesImplement2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize font-medium font-spacegrotesk text-left text-white_A700 w-auto"
          variant="body6"
        >
          {props?.digitalmarketinOne}
        </Text>
        <Img
          src="images/img_arrowdown.svg"
          className="h-6 w-6"
          alt="arrowdown_Two"
        />
      </div>
    </>
  );
};

ServicesImplement2.defaultProps = {
  digitalmarketinOne: "digital marketing solutions",
};

export default ServicesImplement2;
