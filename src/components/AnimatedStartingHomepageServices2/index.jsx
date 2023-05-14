import React from "react";

import { Button, Img } from "components";

const AnimatedStartingHomepageServices2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[328px] relative w-full">
              <Img
                src="images/img_pexelstimamir.png"
                className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                alt="pexelstimamir"
              />
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                <Button
                  className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[164px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                  shape="CircleBorder24"
                  size="md"
                  variant="OutlineBlack9003f_1"
                >
                  {props?.cyberSecurity}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AnimatedStartingHomepageServices2.defaultProps = {
  cyberSecurity: "Cyber Security",
};

export default AnimatedStartingHomepageServices2;
