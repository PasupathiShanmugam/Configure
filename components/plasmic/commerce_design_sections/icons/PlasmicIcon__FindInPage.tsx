// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FindInPageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FindInPageIcon(props: FindInPageIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.064 11.667l1 1H1.205c-.337 0-.622-.117-.855-.35A1.163 1.163 0 010 11.46V1.205C0 .868.117.583.35.35.583.117.868 0 1.205 0h5.641L10 3.782v7.68a.967.967 0 01-.113.457 1.131 1.131 0 01-.305.365L6.243 8.967a2.104 2.104 0 01-.588.278A2.34 2.34 0 015 9.333c-.642 0-1.19-.228-1.648-.685A2.246 2.246 0 012.667 7c0-.642.228-1.19.685-1.648A2.246 2.246 0 015 4.667c.642 0 1.19.228 1.648.685.457.457.685 1.006.685 1.648a2.099 2.099 0 01-.367 1.243L9 10.31V4.133L6.367 1H1.205a.196.196 0 00-.14.064.196.196 0 00-.065.141v10.256c0 .052.021.099.064.141.043.043.09.065.141.065h5.86zM5 8.333c.367 0 .68-.13.942-.391.26-.261.391-.575.391-.942s-.13-.68-.391-.942A1.284 1.284 0 005 5.667c-.367 0-.68.13-.942.391A1.284 1.284 0 003.667 7c0 .367.13.68.391.942.261.26.575.391.942.391z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FindInPageIcon;
/* prettier-ignore-end */
