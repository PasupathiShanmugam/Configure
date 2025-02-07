// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccountTree2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccountTree2Icon(props: AccountTree2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.667 11.667v-2H6V3H4.333v2H0V0h4.333v2h4.334V0H13v5H8.667V3H7v5.667h1.667v-2H13v5H8.667zm1-7.667H12V1H9.667v3zm0 6.667H12v-3H9.667v3zM1 4h2.333V1H1v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountTree2Icon;
/* prettier-ignore-end */
