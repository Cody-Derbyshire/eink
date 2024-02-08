import { useState } from 'react';

const useModal = (modalCount) => {
  const [modalWidths, setModalWidths] = useState(Array(modalCount).fill(0));

  const closeAllModals = () => {
    setModalWidths(Array(modalCount).fill(0));
  };

  const handleOpenModal = (index) => {
    closeAllModals();
    setModalWidths((prevWidths) =>
      prevWidths.map((width, i) =>
        i === index && width === 100 ? 0 : i === index ? 100 : width
      )
    );
  };

  return {
    modalWidths,
    setModalWidths,
    closeAllModals,
    handleOpenModal,
  };
};

export default useModal;
