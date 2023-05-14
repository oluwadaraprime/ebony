import React from "react";

import { Button, Img } from "components";

const AnimatedStartingHomepageServices3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
          <div className="h-[328px] relative w-full">
            <Img
              src="images/img_photo_2.png"
              className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
              alt="photo"
            />
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
              <Button
                className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[289px] ml-1 md:ml-[0] mt-[248px] text-base text-center text-gray_900_01 w-auto"
                shape="CircleBorder24"
                size="md"
                variant="OutlineBlack9003f_1"
              >
                {props?.techConsultancyAndSupport}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AnimatedStartingHomepageServices3.defaultProps = {
  techConsultancyAndSupport: "Tech Consultancy and Support",
};

export default AnimatedStartingHomepageServices3;
