import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedModalActions } from "../actions/index";
import { getModalState } from "../selectors/modal";

export const useModalHook = () => {
  const modalSelector = useSelector(getModalState);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closedModalActions.setModalBeenClosed());
  };

  useEffect(() => {
    if (!modalSelector) {
      setTimeout(() => {
        alert("hello");
      }, 2000);
    }
  });

  return {
    handleModalClose,
  };
};
