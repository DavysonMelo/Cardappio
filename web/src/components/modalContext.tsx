import React, { useState, createContext } from 'react';

interface ModalContextData {
  addVisible: boolean;
  editVisible: boolean;
  showAddModal(): void;
  closeAddModal(): void;
  showEditModal(): void;
  closeEditModal(): void;
}

const ModalViewContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalVisibilityProvider: React.FC = ({ children }) => {
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);

  function showAddModal() {
    setIsAddVisible(true);
  }

  function closeAddModal() {
    setIsAddVisible(false);
  }

  function showEditModal() {
    setIsEditVisible(true);
  }

  function closeEditModal() {
    setIsEditVisible(false);
  }

  return (
    <ModalViewContext.Provider
      value={{
        addVisible: isAddVisible,
        editVisible: isEditVisible,
        showAddModal,
        closeAddModal,
        showEditModal,
        closeEditModal,
      }}
    >
      {children}
    </ModalViewContext.Provider>
  );
};

export default ModalViewContext;
