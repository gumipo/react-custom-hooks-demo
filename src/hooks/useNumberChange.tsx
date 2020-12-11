import React, { useCallback, SetStateAction, Dispatch } from "react";

const useNumberChange = (update: Dispatch<SetStateAction<number>>) => {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (/^[0-9]+$/.test(event.target.value)) {
        update(Number(event.target.value));
      }
    },
    [update]
  );
};

export default useNumberChange;
