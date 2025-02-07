// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
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
          "M10.759 11.461L6.572 7.274c-.334.275-.717.49-1.15.646a3.95 3.95 0 01-1.345.234c-1.14 0-2.104-.395-2.893-1.184C.394 6.181 0 5.217 0 4.078c0-1.14.395-2.104 1.183-2.894C1.974.394 2.938 0 4.076 0c1.139 0 2.103.395 2.893 1.184.79.79 1.185 1.753 1.185 2.893 0 .476-.08.93-.24 1.364-.16.433-.373.81-.64 1.13l4.187 4.188-.702.702zM4.077 7.154c.859 0 1.586-.298 2.183-.894.596-.597.894-1.324.894-2.183 0-.86-.298-1.587-.894-2.183C5.662 1.298 4.936 1 4.077 1c-.86 0-1.587.298-2.183.894C1.298 2.49 1 3.218 1 4.077c0 .859.298 1.586.894 2.183.596.596 1.324.894 2.183.894z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
