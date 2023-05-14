import React from "react";

import { Button, Img, Text } from "components";

const ServicesColumnphoto = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
            <div className="h-[328px] relative w-full">
              <Img
                src="images/img_photo_3.png"
                className="absolute h-[328px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                alt="photo"
              />
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[20px] w-full">
                <Button
                  className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[220px] ml-1 md:ml-[0] mt-[248px] text-base text-blue_gray_900_02 text-center w-auto"
                  shape="CircleBorder24"
                  size="md"
                  variant="OutlineBlack9003f_1"
                >
                  {props?.digitalTransformation}
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

ServicesColumnphoto.defaultProps = {
  digitalTransformation: "Digital Transformation",
  description:
    "The digital world is constantly evolving. We leverage our expertise to help you remain competitive through implementing digital solutions that will enable your business meet changing business and marketing requirements.",
};

export default ServicesColumnphoto;
