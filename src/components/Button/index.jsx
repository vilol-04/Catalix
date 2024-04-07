import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[19px]",
};
const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 shadow-md",
  },
  outline: {
    gray_600: "border-gray-600 border border-solid text-gray-600",
  },
};
const sizes = {
  lg: "h-[40px] px-[3px]",
  xs: "h-[24px] px-1",
  md: "h-[39px] px-[23px] text-[17px]",
  sm: "h-[31px] px-[5px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "md",
  color = "gray_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["lg", "xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700_01", "gray_600"]),
};

export { Button };
