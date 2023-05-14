import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-6xl",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h4: "font-bold sm:text-[35px] md:text-[41px] text-[45px]",
  h5: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h6: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  body1: "font-bold md:text-3xl sm:text-[28px] text-[32px]",
  body2: "font-medium sm:text-[21px] md:text-[23px] text-[25px]",
  body3: "text-2xl md:text-[22px] sm:text-xl",
  body4: "text-xl",
  body5: "font-semibold text-lg",
  body6: "text-base",
  body7: "text-sm",
  body8: "text-xs",
  body9: "font-extrabold sm:text-5xl md:text-5xl text-[100px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
