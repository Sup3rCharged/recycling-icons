import { createIcon, type IconProps } from "../createIcon";
import type { SVGProps } from "react";
const Svg = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 262 336" {...props}><g style={{
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }}><g style={{
      fill: "none",
      stroke: "#000",
      strokeWidth: 8
    }}><path d="M7.25 167H133z" style={{
        strokeWidth: 14
      }} /><path d="m129 168-15 158H39.9L11.2 168" /><path d="M16.5 196H126l-2 26H21l4.7 26h95.5l-2.2 26H30.6l4.6 26H116m-20.6 26 5.6-159H70.9L76 326H59.9L40.2 167" /></g><path d="m59.3 64.5 159.7.4c14 15.6 37 68.1 38 81.1l-80 4c-2-27-14-51.1-16-54.9zM177 155l-27 175 62-115 28 116 16-174z" style={{
      fill: "#000",
      stroke: "#000",
      strokeWidth: 4
    }} /><circle cx={187} cy={31} r={30} stroke="none" style={{
      fill: "#000",
      stroke: "none"
    }} /><path d="M28.6 138C56 124 55.8 103 58 103c26 11 51 14 67 10-46.6 36-23 37-29.4 35-19.7-7-48.3 14-67-10m48.9-28c25.5 0 25.5-8 30.5-10.3 0 0 3 10.3 9 15.3" style={{
      fill: "#fff",
      strokeWidth: 6
    }} /></g></svg>;
export const TidymanIcon = createIcon("TidymanIcon", Svg);
export type TidymanIconProps = IconProps;