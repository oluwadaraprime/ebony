import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder10: "rounded-[10px]",
  icbCircleBorder20: "rounded-[20px]",
  CircleBorder24: "rounded-[24px]",
  RoundedBorder10: "rounded-[10px]",
  RoundedBorder20: "rounded-[20px]",
  CustomBorderLR4: "rounded-bl-none rounded-br rounded-tl-none rounded-tr",
};
const variants = {
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbFillOrangeA700: "bg-orange_A700",
  icbFillOrange400: "bg-orange_400",
  icbFillDeeporange200: "bg-deep_orange_200",
  OutlineBlack9003f_1: "bg-gray_100 shadow-bs1",
  OutlineBlack9000c: "bg-white_A700 shadow-bs text-gray_900_04",
  FillOrange400: "bg-orange_400",
  OutlineBlack9003f: "bg-white_A700 shadow-bs1",
  FillBlue600: "bg-blue_600",
  OutlineOrangeA700: "border-l border-orange_A700 border-solid",
};
const sizes = {
  smIcn: "p-2.5",
  mdIcn: "p-[13px]",
  sm: "p-1",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder10",
    "icbCircleBorder20",
    "CircleBorder24",
    "RoundedBorder10",
    "RoundedBorder20",
    "CustomBorderLR4",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineBlack9000c",
    "icbFillOrangeA700",
    "icbFillOrange400",
    "icbFillDeeporange200",
    "OutlineBlack9003f_1",
    "OutlineBlack9000c",
    "FillOrange400",
    "OutlineBlack9003f",
    "FillBlue600",
    "OutlineOrangeA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm", "md", "lg", "xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
