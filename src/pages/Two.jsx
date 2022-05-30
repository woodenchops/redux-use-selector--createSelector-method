import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const Two = () => {
  const { DelayedAssistModal } = useModalHook();
  return (
    <div>
      Two <DelayedAssistModal />
    </div>
  );
};
