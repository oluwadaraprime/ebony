import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Img, Input, Text } from "components";

const ServicesOnboardingDropdownImplementanime = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="w-full"
          className="font-medium font-spacegrotesk leading-[normal] p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
          name="implement_One"
          placeholder="Website"
          shape="RoundedBorder12"
          size="md"
          variant="FillBluegray900"
        ></Input>
        <Accordion preExpanded={[0]} className="flex flex-col gap-4 w-full">
          {[...Array(4)].map((item, index) => (
            <AccordionItem uuid={index} key={Math.random()}>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <div className="bg-blue_gray_900 flex flex-row items-center justify-between pl-5 pr-3 py-[18px] rounded-[12px] w-[397px] md:w-full">
                          <Text
                            className="font-medium font-spacegrotesk text-left text-white_A700 w-auto"
                            variant="body6"
                          >
                            {props?.webapplication}
                          </Text>
                          {expanded && (
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-6 w-6"
                              alt="arrowdown"
                            />
                          )}
                          {!expanded && (
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-6 w-6"
                              alt="arrowdown_One"
                            />
                          )}
                        </div>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="w-full ">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <Text
                      className="bg-blue_gray_900 capitalize font-medium font-spacegrotesk pl-5 pr-3 py-5 rounded-[12px] text-left text-white_A700 w-[397px]"
                      variant="body6"
                    >
                      {props?.implementTwo}
                    </Text>
                  </div>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

ServicesOnboardingDropdownImplementanime.defaultProps = {
  webapplication: "Web application",
  implementTwo: "mobile app",
};

export default ServicesOnboardingDropdownImplementanime;
