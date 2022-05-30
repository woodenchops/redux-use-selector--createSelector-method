import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const One = () => {
  const { handleModalClose } = useModalHook();
  return (
    <div>
      One <button onClick={handleModalClose}>Close Modal</button>
    </div>
  );
};
