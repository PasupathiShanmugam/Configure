// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScienceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScienceIcon(props: ScienceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.015 11.333c-.425 0-.727-.19-.907-.569-.179-.38-.136-.732.13-1.059l3.777-4.59V1H3.22a.484.484 0 01-.356-.144A.484.484 0 012.72.5c0-.142.048-.26.144-.356A.484.484 0 013.22 0h4.923c.142 0 .26.048.357.144A.484.484 0 018.643.5c0 .142-.048.26-.143.356A.484.484 0 018.143 1h-.795v4.115l3.777 4.59c.266.327.31.68.13 1.06-.18.379-.481.568-.907.568H1.015zm0-1h9.333l-4-4.866V1H5.015v4.467l-4 4.866z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ScienceIcon;
/* prettier-ignore-end */
