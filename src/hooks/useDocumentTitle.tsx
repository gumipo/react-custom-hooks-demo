import { useEffect } from "react";

const useDocumentTitle = (count: number) => {
  useEffect(() => {
    document.title = ` Count${count}`;
  }, [count]);
};

export default useDocumentTitle;
