import React from "react";

import { Button, Img, List, Text } from "components";
import AnimatedStartingHomepageFooternew from "components/AnimatedStartingHomepageFooternew";
import ContactUsOneColumnmessageus from "components/ContactUsOneColumnmessageus";
import ContactUsOneHeader from "components/ContactUsOneHeader";
import ContactUsOneInputfield from "components/ContactUsOneInputfield";
import ContactUsOneInputfield1 from "components/ContactUsOneInputfield1";
import ContactUsOneInputfield2 from "components/ContactUsOneInputfield2";
import ContactUsOneInputfield3 from "components/ContactUsOneInputfield3";

const ContactusPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-spacegrotesk items-center justify-start mx-auto w-full">
        <div className="sm:h-[1285px] md:h-[1598px] h-[1994px] md:px-5 relative w-full">
          <div className="md:h-[1160px] h-[1994px] m-auto w-full">
            <div className="absolute h-[1028px] md:h-[642px] right-[0] top-[0] w-[55%] md:w-full">
              <div className="absolute bottom-[0] md:h-[634px] h-[801px] inset-x-[0] mx-auto w-full">
                <Img
                  src="images/img_aboutuswireframe.png"
                  className="absolute h-[581px] object-cover right-[0] top-[0] w-auto"
                  alt="wireframerOne"
                />
                <div className="absolute backdrop-opacity-[0.5] bg-light_blue_A700 blur-[1000.00px] bottom-[0] h-[634px] left-[0] rounded-[50%] w-[634px]"></div>
              </div>
              <Img
                src="images/img_ellipse37_11.png"
                className="absolute h-[642px] object-cover right-[0] top-[0] w-[68%]"
                alt="ellipseThirtySeven"
              />
            </div>
            <ContactUsOneHeader className="absolute border border-blue_100 border-solid flex flex-row flex-wrap gap-[310px] inset-x-[0] items-center justify-start max-w-[1439px] mx-auto md:px-10 sm:px-5 px-[100px] py-[19px] top-[0] w-full" />
            <Img
              src="images/img_frame882_1160x1440.png"
              className="absolute bottom-[0] h-[1160px] inset-x-[0] mx-auto object-cover w-full"
              alt="frame882"
            />
          </div>
          <div className="absolute bottom-[14%] flex flex-col md:gap-10 gap-24 inset-x-[0] items-center justify-start mx-auto w-[81%]">
            <div className="flex flex-col gap-[30px] items-center justify-start self-stretch w-auto md:w-full">
              <Text
                className="text-center text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Get in Touch
              </Text>
              <div className="flex md:flex-col flex-row font-mulish gap-6 items-center justify-start self-stretch w-auto md:w-full">
                <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                  <Img
                    src="images/img_mail.svg"
                    className="h-7 w-auto"
                    alt="mail"
                  />
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body4"
                  >
                    contact@ebonytechnology.co.uk
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-evenly w-2/5 md:w-full">
                  <Img
                    src="images/img_call.svg"
                    className="h-[27px] w-7"
                    alt="call"
                  />
                  <Text
                    className="font-bold mt-0.5 text-center text-white_A700 w-auto"
                    variant="body4"
                  >
                    +44 (0) 772 761 8504
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-center p-[117px] md:px-10 sm:px-5 rounded-[20px] shadow-bs5 w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start mb-[51px] mt-12 self-stretch w-auto md:w-full">
                <div className="flex flex-col font-mulish gap-8 items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[45px] grid md:grid-cols-1 grid-cols-2 justify-start self-stretch w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <ContactUsOneInputfield
                        className="h-[124px] relative w-[443px] sm:w-full"
                        johndavid="John David"
                        fullname="Full name *"
                      />
                      <ContactUsOneInputfield1
                        className="h-[124px] relative w-[443px] sm:w-full"
                        email="JohnDavidQ@gmail.com"
                        youremail="your email*"
                      />
                    </List>
                    <List
                      className="sm:flex-col flex-row font-avenirnext gap-[45px] grid md:grid-cols-1 grid-cols-2 justify-start self-stretch w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <ContactUsOneInputfield2
                        className="bg-white_A700 flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full"
                        companyname="company name*"
                        yourcompanynameOne="your company name"
                      />
                      <ContactUsOneInputfield3
                        className="bg-white_A700 flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full"
                        subject="subject*"
                        language="how can we  help"
                      />
                    </List>
                  </div>
                  <ContactUsOneColumnmessageus
                    className="bg-white_A700 flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full"
                    messageus="Message Us *"
                    hellothereiwoulOne="Hello there, I would like to talk about how to..."
                  />
                </div>
                <Button
                  className="capitalize cursor-pointer font-medium font-spacegrotesk leading-[normal] min-w-[232px] text-2xl md:text-[22px] text-black_900_01 text-center sm:text-xl w-auto"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="FillOrange400"
                >
                  Send message
                </Button>
              </div>
            </div>
          </div>
        </div>
        <AnimatedStartingHomepageFooternew
          className="bg-gray_900 flex font-inter items-center justify-center md:px-5 w-full"
          copyright2022="© Copyright 2022, All Rights Reserved by Nagency"
          wecreatedigitalOne="We create digital solutions that support businesses to launch, run and grow."
          p25courtneyroad="25 Courtney Road, Grays, Essex, UK RM16 4TZ"
          p440772761="+44 (0) 772 761 8504"
          p2022ebonytechno="© 2023 Ebony Technology. Copyright and rights reserved"
          wewillliketo="We will like to send you newsletters about our products, offers and services."
        />
      </div>
    </>
  );
};

export default ContactusPage;
