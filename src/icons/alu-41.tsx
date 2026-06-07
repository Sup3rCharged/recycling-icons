import { createIcon, type IconProps } from "../createIcon";
import type { SVGProps } from "react";
const Svg = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 205 244" {...props}><path id="a" d="m159 49-11 6-22-38C115-1 89-1 79 16L47 70l16 9 31-53c4-7 13-6 16-1l23 40-11 6 38 22z" /><use xlinkHref="#a" transform="rotate(120 102 114)" /><use xlinkHref="#a" transform="rotate(240 102 114)" /><g fontFamily="Arial" fontSize={59} fontWeight="bold" letterSpacing={3}><text x={39} y={240}>{"ALU"}</text><text x={68} y={132}>{"41"}</text></g></svg>;
export const Alu41Icon = createIcon("Alu41Icon", Svg);
export type Alu41IconProps = IconProps;