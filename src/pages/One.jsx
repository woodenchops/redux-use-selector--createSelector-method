import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const One = () => {
  const { DelayedAssistModal } = useModalHook();
  return (
    <div>
      One <DelayedAssistModal />
    </div>
  );
};
