import React, { useCallback, SetStateAction, Dispatch } from "react";

const useStringChange = (update: Dispatch<SetStateAction<string>>) => {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      update(event.target.value);
    },
    [update]
  );
};

export default useStringChange;
