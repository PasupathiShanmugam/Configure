// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeleteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeleteIcon(props: DeleteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.808 16.884c-.499 0-.925-.176-1.278-.53A1.742 1.742 0 011 15.078V2.385H0v-1.5h4.5V0h6v.884H15v1.5h-1v12.693c0 .505-.175.932-.525 1.283-.35.35-.778.524-1.283.524H2.808zm9.692-14.5h-10v12.693a.3.3 0 00.087.221.3.3 0 00.22.086h9.385a.293.293 0 00.212-.096.294.294 0 00.096-.211V2.385zm-7.596 11h1.5v-9h-1.5v9zm3.692 0h1.5v-9h-1.5v9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeleteIcon;
/* prettier-ignore-end */
