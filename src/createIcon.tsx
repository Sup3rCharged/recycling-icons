import { forwardRef, type ReactElement, type SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  /** Shorthand for width and height in pixels. Defaults to 24. */
  size?: number | string;
  /** Accessible label. When omitted, the icon is hidden from assistive tech. */
  title?: string;
};

export function createIcon(
  displayName: string,
  Svg: (props: SVGProps<SVGSVGElement>) => ReactElement
) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
    { size = 24, width, height, title, "aria-hidden": ariaHidden, ...props },
    ref
  ) {
    const labelled = Boolean(title);
    const resolvedWidth = width ?? size;
    const resolvedHeight = height ?? size;

    return (
      <Svg
        ref={ref}
        width={resolvedWidth}
        height={resolvedHeight}
        role={labelled ? "img" : undefined}
        aria-hidden={labelled ? undefined : ariaHidden ?? true}
        aria-label={labelled ? title : undefined}
        {...props}
      />
    );
  });

  Icon.displayName = displayName;
  return Icon;
}
