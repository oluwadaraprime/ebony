import React from "react";

import { Button, Img, Text } from "components";

const ServicesColumndescription = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray_400 flex flex-col items-center justify-start rounded-[20px] w-full">
              <div className="h-[329px] relative w-full">
                <Img
                  src="images/img_photo_329x385.png"
                  className="absolute h-[329px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                  alt="photo"
                />
                <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[20px] w-full">
                  <Button
                    className="capitalize cursor-pointer font-bold font-spacegrotesk leading-[normal] min-w-[256px] ml-0.5 md:ml-[0] mt-[246px] text-base text-center text-gray_900_01 w-auto"
                    shape="CircleBorder24"
                    size="md"
                    variant="OutlineBlack9003f"
                  >
                    {props?.webAndAppDevelopment}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="font-avenirnext font-medium leading-[160.00%] max-w-[340px] md:max-w-full text-center text-white_A700"
          variant="body6"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

ServicesColumndescription.defaultProps = {
  webAndAppDevelopment: "Web and App Development",
  description:
    "It is one thing to build a product, it is another thing to build a product that customers want. At Ebony Technology we work closely with you to implement your ideas of building a functional, secured, viable and user-friendly web application or mobile app.",
};

export default ServicesColumndescription;
