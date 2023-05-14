import React from "react";

import { Img, Text } from "components";

const AnimatedStartingHomepageTertiarybutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-avenirnext text-blue_600 text-left w-auto"
          variant="body5"
        >
          {props?.learnmore}
        </Text>
        <Img
          src="images/img_arrowright_blue_600.svg"
          className="h-5 w-5"
          alt="arrowright"
        />
      </div>
    </>
  );
};

AnimatedStartingHomepageTertiarybutton.defaultProps = {
  learnmore: "Learn More",
};

export default AnimatedStartingHomepageTertiarybutton;
