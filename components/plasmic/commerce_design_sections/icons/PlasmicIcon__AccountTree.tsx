// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccountTreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccountTreeIcon(props: AccountTreeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M34.412 45v-7.941H23.824v-26.47h-7.942v7.94H0V0h15.882v7.941h18.53V0h15.882v18.53H34.412v-7.942H26.47v23.824h7.94V26.47h15.883V45H34.412zm2.647-29.118h10.588V2.647H37.059v13.235zm0 26.47h10.588V29.119H37.059v13.235zM2.647 15.883h10.588V2.647H2.647v13.235z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountTreeIcon;
/* prettier-ignore-end */
