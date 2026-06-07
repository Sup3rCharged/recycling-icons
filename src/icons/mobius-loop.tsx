import { createIcon, type IconProps } from "../createIcon";
import type { SVGProps } from "react";
const Svg = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 107 103" {...props}><g id="a" stroke="#000"><path fill="none" strokeWidth={10} d="M52 92H16A14 14 0 0 1 6 75l9-16" /><path d="m5 56 17 10-1-17z" /></g><use xlinkHref="#a" transform="rotate(120 53 59)" /><use xlinkHref="#a" transform="rotate(240 53 59)" /></svg>;
export const MobiusLoopIcon = createIcon("MobiusLoopIcon", Svg);
export type MobiusLoopIconProps = IconProps;