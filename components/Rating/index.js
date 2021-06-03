import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { colorSchemes } from "constants/colors";
import { forwardRef, useMemo } from "react";

const Rating = forwardRef(({ variant = "star", rating }, ref) => {
  const { Icon, colorScheme } = useMemo(
    () =>
      variant === "star"
        ? { Icon: StarIcon, colorScheme: colorSchemes.yellow }
        : { Icon: HeartIcon, colorScheme: colorSchemes.red },
    [variant]
  );

  return (
    <div
      {...{ ref }}
      className={classNames(
        "inline-flex items-center text-sm font-bold",
        colorScheme
      )}
    >
      {rating.toFixed(1)} <Icon className="inline w-4 h-4 ml-1" />
    </div>
  );
});

export default Rating;
