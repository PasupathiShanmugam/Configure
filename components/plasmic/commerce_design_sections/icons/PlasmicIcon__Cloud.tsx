// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudIcon(props: CloudIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.333 10c-.921 0-1.707-.32-2.357-.96C.326 8.4 0 7.619 0 6.698c0-.816.261-1.541.783-2.176a3.069 3.069 0 011.999-1.127A4.166 4.166 0 014.285.95 4.213 4.213 0 017 0c1.206 0 2.23.42 3.071 1.262.842.842 1.262 1.865 1.262 3.071v.334h.206a2.576 2.576 0 011.757.847c.47.51.704 1.117.704 1.82 0 .743-.259 1.373-.776 1.89a2.573 2.573 0 01-1.89.776h-8zm0-1h8a1.61 1.61 0 001.184-.483A1.61 1.61 0 0013 7.333a1.61 1.61 0 00-.483-1.183 1.61 1.61 0 00-1.184-.483h-1V4.333c0-.922-.325-1.708-.975-2.358A3.213 3.213 0 007 1c-.922 0-1.708.325-2.358.975a3.213 3.213 0 00-.975 2.358h-.334c-.644 0-1.194.228-1.65.684A2.248 2.248 0 001 6.667c0 .644.228 1.194.683 1.65A2.248 2.248 0 003.333 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CloudIcon;
/* prettier-ignore-end */
