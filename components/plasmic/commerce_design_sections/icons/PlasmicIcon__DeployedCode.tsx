// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeployedCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeployedCodeIcon(props: DeployedCodeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.167 11.348v-4.76L1 4.176v4.643c0 .034.009.066.026.096a.22.22 0 00.077.077l4.064 2.355zm1 0l4.064-2.356a.221.221 0 00.077-.077.191.191 0 00.025-.096V4.176L6.167 6.588v4.76zm-.5-5.621l4.116-2.38L5.77 1.026a.192.192 0 00-.102-.032.192.192 0 00-.103.032L1.55 3.348l4.117 2.379zM.603 9.87A1.187 1.187 0 010 8.83V3.772a1.181 1.181 0 01.603-1.04L5.064.163a1.187 1.187 0 011.205 0l4.462 2.568a1.187 1.187 0 01.602 1.041V8.83a1.181 1.181 0 01-.602 1.041L6.269 12.44a1.187 1.187 0 01-1.205 0L.603 9.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeployedCodeIcon;
/* prettier-ignore-end */
