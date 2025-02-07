// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PersonCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PersonCheckIcon(props: PersonCheckIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.7 4.635l-2.13-2.13.713-.696L10.7 3.226 13.533.392l.703.713-3.536 3.53zM5 4.667c-.642 0-1.19-.229-1.648-.686a2.247 2.247 0 01-.685-1.648c0-.641.228-1.19.685-1.648A2.246 2.246 0 015 0c.642 0 1.19.229 1.648.685.457.457.685 1.007.685 1.648 0 .642-.228 1.191-.685 1.648A2.247 2.247 0 015 4.667zM0 9.744V8.262c0-.327.089-.63.266-.908.177-.278.414-.492.711-.641a9.673 9.673 0 011.994-.727 8.632 8.632 0 014.058 0c.67.162 1.335.404 1.994.727.297.15.534.363.711.641.177.279.266.581.266.907v1.483H0zm1-1h8v-.482c0-.136-.04-.26-.117-.376a.89.89 0 00-.319-.28 8.574 8.574 0 00-1.757-.644 7.597 7.597 0 00-3.614 0 8.574 8.574 0 00-1.757.643.89.89 0 00-.319.281.653.653 0 00-.117.375v.483zm4-5.077c.367 0 .68-.13.942-.392.26-.261.391-.575.391-.942 0-.366-.13-.68-.391-.941A1.284 1.284 0 005 1c-.367 0-.68.13-.942.392a1.284 1.284 0 00-.391.941c0 .367.13.68.391.942.261.261.575.392.942.392z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PersonCheckIcon;
/* prettier-ignore-end */
