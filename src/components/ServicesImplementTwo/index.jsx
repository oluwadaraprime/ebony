import React from "react";

import { Text } from "components";

const ServicesImplementTwo = (props) => {
  return (
    <>
      {!!props?.implementTwo ? (
        <Text className={props.className} variant="body6">
          {props?.implementTwo}
        </Text>
      ) : null}
    </>
  );
};

ServicesImplementTwo.defaultProps = {};

export default ServicesImplementTwo;
