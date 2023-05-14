import React from "react";

import { Button, Img, Text } from "components";

const ServicesColumnphoto1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
            <div className="h-[328px] relative w-full">
              <Img
                src="images/img_photo_2.png"
                className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                alt="photo"
              />
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                <Button
                  className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[289px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
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
        <Text
          className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-gray_600"
          variant="body6"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

ServicesColumnphoto1.defaultProps = {
  techConsultancyAndSupport: "Tech Consultancy and Support",
  description:
    "The role of technology in business is indispensable yet many businesses do not have the type of support they require to thrive. At Ebony Technology, we provide consultancy, support, troubleshooting and ongoing maintenance for businesses.",
};

export default ServicesColumnphoto1;
