import React, { useState } from "react";

type Bind = {
  value: string;
  onChange: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
};

const useInput = (initialValue: string): [string, Bind, () => void] => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
