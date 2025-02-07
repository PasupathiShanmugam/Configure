// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyboardArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyboardArrowDownIcon(props: KeyboardArrowDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.115 3.512a.485.485 0 01-.37-.15L.125.743A.423.423 0 010 .437a.413.413 0 01.124-.31A.419.419 0 01.431 0a.42.42 0 01.308.127l2.376 2.376L5.49.127a.424.424 0 01.304-.124.413.413 0 01.31.124.419.419 0 01.127.307c0 .12-.042.223-.126.308L3.484 3.363a.485.485 0 01-.37.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyboardArrowDownIcon;
/* prettier-ignore-end */
