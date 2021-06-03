import { useCallback, useMemo, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((oldValue) => !oldValue);
  }, []);

  return useMemo(
    () => ({
      value,
      on,
      off,
      toggle,
      state: value,
      visible: value,
      set: on,
      show: on,
      start: on,
      reset: off,
      hide: off,
      stop: off,
      flip: toggle,
    }),
    [value, on, off, toggle]
  );
};

export default useToggle;
