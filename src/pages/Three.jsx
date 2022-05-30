import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const Three = () => {
  const { handleModalClose } = useModalHook();
  return (
    <div>
      Three <button onClick={handleModalClose}>Close Modal</button>
    </div>
  );
};
