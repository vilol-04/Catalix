import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[3px]",
};
const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-500",
  },
};
const sizes = {
  xs: "h-[17px] pr-[13px] text-[10px]",
  sm: "h-[23px] pl-[11px] pr-[25px] text-[10px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700_01",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "#000",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700_01"]),
};

export { SelectBox };
