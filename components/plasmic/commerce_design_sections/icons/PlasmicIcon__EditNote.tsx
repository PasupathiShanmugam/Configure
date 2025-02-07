// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditNoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditNoteIcon(props: EditNoteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 6.333v-1h4.667v1H0zm0-2.666v-1h7.333v1H0zM0 1V0h7.333v1H0zm5.744 9V8.239l3.619-3.603a.716.716 0 01.268-.175.868.868 0 01.289-.05.811.811 0 01.571.235l.617.623a.97.97 0 01.166.27.75.75 0 01.06.29.869.869 0 01-.054.294.78.78 0 01-.172.274L7.505 10H5.744zm.795-.795h.633l2.164-2.174-.306-.317-.31-.313-2.182 2.17v.634zm2.49-2.491l-.31-.313.617.63-.306-.317z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EditNoteIcon;
/* prettier-ignore-end */
