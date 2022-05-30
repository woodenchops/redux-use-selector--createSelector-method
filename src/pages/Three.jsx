import React from "react";
import { useModalHook } from "../hooks/modalHook";

export const Three = () => {
  const { DelayedAssistModal } = useModalHook();
  return (
    <div>
      Three <DelayedAssistModal />
    </div>
  );
};
