// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenInFullIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenInFullIcon(props: OpenInFullIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 14.167v-6.25h1.25v4.13L12.046 1.25h-4.13V0h6.25v6.25h-1.25V2.12L2.12 12.917h4.13v1.25H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpenInFullIcon;
/* prettier-ignore-end */
