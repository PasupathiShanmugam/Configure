// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeIcon(props: CodeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.77 7.538L0 3.77 3.77 0l.712.713L1.415 3.78l3.057 3.056-.703.702zm5.332 0l-.712-.713 3.066-3.066L8.4.703 9.102 0l3.77 3.77-3.77 3.768z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CodeIcon;
/* prettier-ignore-end */
