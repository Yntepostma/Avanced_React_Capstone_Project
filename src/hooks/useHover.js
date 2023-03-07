import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", mouseEnter);
    ref.current.addEventListener("mouseleave", mouseLeave);

    // return () => {
    //   ref.current.removeEventListener("mouseenter", mouseEnter);
    //   ref.current.removeEventListener("mouseleave", mouseLeave);
    // };
  }, []);

  return [hover, ref];
};

export default useHover;
