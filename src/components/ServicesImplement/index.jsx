import React from "react";

import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";

import { Img, Text } from "components";

const ServicesImplement = (props) => {
  return (
    <>
      <AccordionItemHeading className="w-full">
        <AccordionItemButton>
          <AccordionItemState>
            {({ expanded }) => (
              <div className={props.className}>
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
              </div>
            )}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
    </>
  );
};

ServicesImplement.defaultProps = { webapplication: "Web application" };

export default ServicesImplement;
