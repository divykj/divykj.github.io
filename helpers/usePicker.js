import { useMemo, useState } from "react";

const usePicker = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return useMemo(
    () => ({
      value,
      set: setValue,
      bind: {
        value,
        onChange: setValue,
      },
    }),
    [value]
  );
};

export default usePicker;
