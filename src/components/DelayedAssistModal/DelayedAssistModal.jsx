import React from "react";

export const DelayedAssistModal = () => {
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
    <div>
      This is the delay modal{" "}
      <button onClick={handleModalClose}>Close Modal</button>
    </div>
  ) : null;
};
