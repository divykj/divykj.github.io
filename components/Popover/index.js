import Tippy from "@tippyjs/react/headless";
import { useCallback } from "react";
import { motion } from "framer-motion";

import useToggle from "helpers/useToggle";
import { fadeInDownMotion } from "constants/motion";
import { colorSchemes } from "constants/colors";
import classNames from "classnames";

const popoverVariants = fadeInDownMotion({
  initialDelay: 0.5,
  duration: 0.1,
  offset: 5,
});

const Popover = ({
  content,
  children,
  placement = "bottom",
  colorScheme = "gray",
}) => {
  const popoverVisible = useToggle(false);

  const renderTooltip = useCallback(
    (attrs) => (
      <>
        <motion.div
          variants={popoverVariants}
          animate={popoverVisible.state ? "animate" : "initial"}
          tabIndex="-1"
          {...attrs}
        >
          <div
            className={classNames(
              colorSchemes[colorScheme],
              "font-bold text-sm px-3 py-1 shadow-sm bg-gray-900"
            )}
          >
            {content}
          </div>
        </motion.div>
      </>
    ),
    [content, popoverVisible.state]
  );

  return (
    <Tippy
      animation
      interactive
      render={renderTooltip}
      onMount={popoverVisible.show}
      onHide={popoverVisible.hide}
      delay
      {...{ placement }}
    >
      {children}
    </Tippy>
  );
};

export default Popover;
