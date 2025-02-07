// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarChartIcon(props: BarChartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.667 10V6.064H10V10H7.667zm-3.834 0V0h2.334v10H3.833zM0 10V3.27h2.333V10H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BarChartIcon;
/* prettier-ignore-end */
