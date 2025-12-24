import { useEffect, useRef } from "react";

/**
 * usePrevious
 * @param {any} value - current value
 * @returns previous value
 */
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
