import React, { useState } from "react";
import useStringChange from "../hooks/useStringChange";
import useNumberChange from "../hooks/useStringChange";

const TextInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  return (
    <form>
      <input value={name} onChange={useStringChange(setName)} />
      <input value={age} onChange={useNumberChange(setAge)} />
    </form>
  );
};

export default TextInput;
