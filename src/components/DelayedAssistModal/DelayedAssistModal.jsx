import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedModalActions } from "../../actions";
import { getHasModalBeenClosedState } from "../../selectors/modal";

export const DelayedAssistModal = ({
  id,
  description = "This is the delay modal",
}) => {
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

  return shouldModalOpen ? (
    <div id={id} key={id}>
      {description} <button onClick={handleModalClose}>Close Modal</button>
    </div>
  ) : null;
};
