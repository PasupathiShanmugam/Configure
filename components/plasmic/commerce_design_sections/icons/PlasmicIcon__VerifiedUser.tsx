// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerifiedUserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerifiedUserIcon(props: VerifiedUserIconProps) {
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
          "M4.3 8.444l3.536-3.536-.713-.713L4.3 7.018 2.887 5.605l-.713.713L4.3 8.444zm.7 4.184c-1.442-.393-2.636-1.242-3.581-2.546A7.274 7.274 0 010 5.708V1.872L5 0l5 1.872v3.836c0 1.612-.473 3.07-1.419 4.374-.945 1.304-2.14 2.153-3.581 2.546zm0-1.054c1.156-.366 2.111-1.1 2.867-2.2A6.332 6.332 0 009 5.708v-3.15L5 1.064 1 2.558v3.15c0 1.344.378 2.566 1.133 3.666.756 1.1 1.711 1.834 2.867 2.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VerifiedUserIcon;
/* prettier-ignore-end */
