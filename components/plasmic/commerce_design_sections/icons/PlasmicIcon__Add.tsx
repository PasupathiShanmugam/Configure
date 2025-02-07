// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddIcon(props: AddIconProps) {
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
          "M5.063 6.688h-3.5a.793.793 0 01-.578-.236l4.077.236zm0 0v3.5c0 .222.077.42.234.577a.793.793 0 00.578.235c.222 0 .42-.078.577-.235a.794.794 0 00.236-.578v-3.5h3.5c.222 0 .42-.077.577-.234A.793.793 0 0011 5.875a.794.794 0 00-.235-.577.794.794 0 00-.578-.236h-3.5v-3.5a.794.794 0 00-.234-.577m-1.39 5.702L5.298.986A.794.794 0 015.875.75c.223 0 .42.078.578.235M.985 5.297a.793.793 0 00-.235.578c0 .222.078.42.235.577L5.298.985a.793.793 0 00-.236.578v3.5h-3.5a.794.794 0 00-.577.234zm0 0s0 0 0 0l.177.177-.177-.177s0 0 0 0zM6.453.985s0 0 0 0l-.177.177.177-.177s0 0 0 0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default AddIcon;
/* prettier-ignore-end */
