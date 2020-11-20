import React, { useState, createContext } from 'react';
import { DishProps } from '../types/dish';

interface ModalContextData {
  dishData: DishProps;
  addVisible: boolean;
  editVisible: boolean;
  showAddModal(): void;
  closeAddModal(): void;
  showEditModal(): void;
  closeEditModal(): void;
  setDish(data: DishProps): void;
}

export const ModalViewContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalVisibilityProvider: React.FC = ({ children }) => {
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [dishData, setDishData] = useState<DishProps>({} as DishProps);

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

  function setDish(data: DishProps) {
    setDishData(data);
  }

  return (
    <ModalViewContext.Provider
      value={{
        dishData,
        addVisible: isAddVisible,
        editVisible: isEditVisible,
        showAddModal,
        closeAddModal,
        showEditModal,
        closeEditModal,
        setDish,
      }}
    >
      {children}
    </ModalViewContext.Provider>
  );
};

export default ModalViewContext;
