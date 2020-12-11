import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocTitleTwo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count- {count}</button>
    </div>
  );
};

export default DocTitleTwo;
