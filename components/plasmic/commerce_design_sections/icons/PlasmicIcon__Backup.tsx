// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackupIcon(props: BackupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.688 4.5l-.778.77a.404.404 0 01-.3.12.423.423 0 01-.31-.13.398.398 0 01-.123-.307.427.427 0 01.124-.308L5.756 3.19a.506.506 0 01.738 0L7.95 4.645c.08.081.124.182.128.303a.397.397 0 01-.128.313.417.417 0 01-.303.122.435.435 0 01-.312-.12l-.771-.762v3.194a.17.17 0 00.056.124.171.171 0 00.123.056h3.175c.408 0 .753-.141 1.035-.423.282-.282.423-.627.423-1.035 0-.409-.141-.754-.423-1.036a1.408 1.408 0 00-1.035-.423h-.875V3.792c0-.807-.285-1.495-.853-2.064A2.811 2.811 0 006.125.875c-.807 0-1.495.284-2.064.853a2.811 2.811 0 00-.853 2.064h-.303c-.552 0-1.029.199-1.43.598-.4.398-.6.88-.6 1.443 0 .564.2 1.045.598 1.444.399.399.88.598 1.444.598h1.02c.124 0 .228.042.312.126a.424.424 0 01.126.312.423.423 0 01-.126.311.424.424 0 01-.311.126H2.917c-.806 0-1.494-.28-2.063-.839A2.765 2.765 0 010 5.861c0-.725.233-1.363.7-1.913a2.734 2.734 0 011.734-.978A3.645 3.645 0 013.75.831 3.686 3.686 0 016.125 0c1.056 0 1.952.368 2.688 1.104.736.735 1.104 1.631 1.104 2.688v.291h.18a2.254 2.254 0 011.537.742c.41.446.616.977.616 1.592 0 .65-.224 1.202-.673 1.654a2.233 2.233 0 01-1.65.679H6.743c-.295 0-.544-.102-.748-.306a1.018 1.018 0 01-.306-.749V4.501z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackupIcon;
/* prettier-ignore-end */
