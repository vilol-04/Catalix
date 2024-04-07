import React from "react";

const sizes = {
  s: "text-base font-semibold",
  md: "text-[42px] font-semibold md:text-[38px] sm:text-[32px]",
  xs: "text-[15px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
