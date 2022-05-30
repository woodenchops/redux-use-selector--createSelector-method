import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedModalActions } from "../actions/index";
import { getHasModalBeenClosedState } from "../selectors/modal";

export const useModalHook = () => {
  const modalSelector = useSelector(getHasModalBeenClosedState);
  const dispatch = useDispatch();
  const [shouldModalOpen, setShouldModalOpen] = useState(false);

  const handleModalClose = () => {
    dispatch(closedModalActions.setModalBeenClosed());
  };

  useEffect(() => {
    if (!modalSelector) {
      setTimeout(() => {
        setShouldModalOpen(true);
      }, 2000);
    }
  });

  const DelayedAssistModal = () => {
    return shouldModalOpen ? (
      <div>
        This is the delay modal{" "}
        <button onClick={handleModalClose}>Close Modal</button>
      </div>
    ) : null;
  };

  return {
    DelayedAssistModal,
  };
};
