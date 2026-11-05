import React from "react";
const sprite = new URL("../assets/icons.svg", import.meta.url).href;
function createIcon(id, baseClass) {
  const Icon = React.forwardRef(function Icon(
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      absoluteStrokeWidth,
      children,
      className = "",
      ...props
    },
    ref,
  ) {
    const aria = Object.keys(props).some(
      (key) => key.startsWith("aria-") || key === "role",
    )
      ? {}
      : { "aria-hidden": true };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={
          absoluteStrokeWidth
            ? (Number(strokeWidth) * 24) / Number(size)
            : strokeWidth
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        className={baseClass + (className ? " " + className : "")}
        {...aria}
        {...props}
      >
        <use href={sprite + "#" + id} />
        {children}
      </svg>
    );
  });
  Icon.displayName = id;
  return Icon;
}
export const ArrowUpRight = createIcon(
  "arrow-up-right",
  "lucide lucide-arrow-up-right",
);
export const Package = createIcon("package", "lucide lucide-package");
export const ArrowRight = createIcon(
  "arrow-right",
  "lucide lucide-arrow-right",
);
export const Truck = createIcon("truck", "lucide lucide-truck");
export const MapPin = createIcon("map-pin", "lucide lucide-map-pin");
export const Check = createIcon("check", "lucide lucide-check");
