import { useRef } from "react";

const useSearchInputRef = () => {
  const value1 = useRef();
  const value2 = useRef();
  return [value1, value2];
};

export default useSearchInputRef;
