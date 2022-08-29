import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder2: "rounded-radius2",
  RoundedBorder6: "rounded-radius6",
  RoundedBorder12: "rounded-radius12",
};
const variants = {
  icbFillBlue700: "bg-blue_700",
  FillGray100: "bg-gray_100 text-gray_600",
  OutlineBluegray40026: "bg-white_A700 shadow-bs text-bluegray_800",
  FillGray5087: "bg-gray_50_87 text-bluegray_400",
  OutlineWhiteA700:
    "bg-black_900_0f outline outline-[2px] outline-white_A700 text-white_A700",
  FillLightblue500: "bg-light_blue_500 text-white_A700",
  FillGray102: "bg-gray_102 text-gray_600",
  FillGray103: "bg-gray_103 text-gray_400",
  FillGray104: "bg-gray_104 text-gray_401",
  FillRed50: "bg-red_50 text-pink_500",
  FillPink500: "bg-pink_500 text-white_A700",
};
const sizes = {
  smIcn: "p-[1px]",
  sm: "lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "xl:p-[11px] 2xl:p-[12px] p-[13px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] p-[18px] 3xl:p-[20px]",
  xl: "lg:p-[19px] xl:p-[22px] 2xl:p-[24px] p-[26px] 3xl:p-[29px]",
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
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
    "icbRoundedBorder2",
    "RoundedBorder6",
    "RoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "icbFillBlue700",
    "FillGray100",
    "OutlineBluegray40026",
    "FillGray5087",
    "OutlineWhiteA700",
    "FillLightblue500",
    "FillGray102",
    "FillGray103",
    "FillGray104",
    "FillRed50",
    "FillPink500",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillGray100",
  size: "sm",
};

export { Button };
