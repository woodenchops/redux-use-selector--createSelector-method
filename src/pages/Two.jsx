import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const Two = () => {
  const { handleModalClose } = useModalHook();
  return (
    <div>
      Two <button onClick={handleModalClose}>Close Modal</button>
    </div>
  );
};
