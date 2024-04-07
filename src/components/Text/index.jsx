import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-[17px] font-normal",
  s: "text-sm font-light",
  xl: "text-lg font-light",
  md: "text-[15px] font-light",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
