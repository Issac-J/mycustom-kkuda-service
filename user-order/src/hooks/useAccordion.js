import { useCallback, useRef, useState } from "react";

const useAccordion = (setIsEditing) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (e) => {
      if (e) {
        e.stopPropagation();
      }

      if (parentRef.current === null || childRef.current === null) {
        return;
      }

      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
      setIsEditing(!isCollapse);
    },
    [isCollapse, setIsEditing],
  );

  return { parentRef, childRef, isCollapse, handleButtonClick };
};

export default useAccordion;
