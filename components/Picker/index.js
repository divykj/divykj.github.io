import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/outline";

import useToggle from "helpers/useToggle";
import classNames from "classnames";

const defaultRenderPlaceholder = (item) => <b>{item.displayName}</b>;
const defaultRenderItem = (item) => item.displayName;

const dropdownVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.15 } },
  exit: { scale: 0.9, opacity: 0, transition: { duration: 0.1 } },
};

const Picker = ({
  items,
  value,
  onChange,
  renderPlaceholder = defaultRenderPlaceholder,
  renderItem = defaultRenderItem,
  className,
}) => {
  const dropdownVisible = useToggle(false);

  return (
    <div className={classNames("relative", className)}>
      <button
        onClick={dropdownVisible.toggle}
        className="relative z-10 block px-4 py-2 text-sm surface focus:outline-none w-full"
      >
        {renderPlaceholder(value)}{" "}
        <motion.div
          layout
          animate={{ rotate: dropdownVisible.visible ? 180 : 0 }}
          transition={{ duration: dropdownVisible.visible ? 0.15 : 0.1 }}
          className="inline-block align-middle"
        >
          <ChevronDownIcon className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {dropdownVisible.visible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={dropdownVariants}
            className="absolute right-0 z-20 py-2 mt-2 origin-top-right shadow-xl surface left-0 md:left-auto"
          >
            {items.map((value) => (
              <div
                key={value.key}
                onClick={() => {
                  onChange(value);
                  dropdownVisible.hide();
                }}
                className="block text-center md:text-left px-4 py-2 text-sm font-bold text-gray-100 w-full md:w-36 hover:bg-gray-700 hover:text-indigo-200"
              >
                {renderItem(value)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Picker;
