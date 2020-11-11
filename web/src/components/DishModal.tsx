import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from './modalContext';

import '../styles/components/dishModal.css';

interface DishModalProps {
  open: boolean;
  title: string;
  name?: string;
  image?: string;
  calories?: string;
  sideDishes?: string;
  price?: string;
  category?: string;
  ingredients?: string;
}

const DishModal: React.FC<DishModalProps> = (props) => {
  const { closeAddModal, closeEditModal, addVisible, editVisible } = useContext(
    ModalContext
  );

  return (
    <div>
      <Modal
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'absolute',
            left: '30%',
            top: '15%',
            bottom: '3%',
            right: '10%',
            background: 'none',
          },
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        isOpen={props.title.includes('Adicionar') ? addVisible : editVisible}
      >
        <div id="modalContent-container">
          <h2>{props.title}</h2>
          <div id="form">
            <form>
              <div id="first-column">
                <label htmlFor="dishName">Nome do prato</label>
                <br />
                <input defaultValue={props.name} type="text" name="dishName" />
                <br />
                <label htmlFor="sideDishes">Acompanhamentos</label>
                <br />
                <input
                  defaultValue={props.sideDishes}
                  type="text"
                  name="sideDishes"
                />
                <br />
                <label htmlFor="image">Imagem (Url)</label>
                <br />
                <input defaultValue={props.image} type="text" name="image" />
                <br />
                <label htmlFor="ingredients">Ingredientes</label>
                <br />
                <textarea defaultValue={props.ingredients} name="ingredients" />
                <br />
              </div>
            </form>

            <form>
              <div id="second-column">
                <label htmlFor="calories">Calorias</label>
                <br />
                <input
                  defaultValue={props.calories}
                  type="text"
                  name="calories"
                />
                <br />
                <label htmlFor="category">Categoria</label>
                <br />
                <input
                  defaultValue={props.category}
                  type="text"
                  name="category"
                />
                <br />
                <label htmlFor="price">Preço</label>
                <br />
                <input defaultValue={props.price} type="text" name="price" />
                <br />
              </div>
            </form>
          </div>
          <div id="buttons-container">
            <button
              id="save-button"
              onClick={() => {
                addVisible ? closeAddModal() : closeEditModal();
              }}
            >
              Adicionar
            </button>
            <button
              id="cancel-button"
              onClick={() => {
                addVisible ? closeAddModal() : closeEditModal();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DishModal;
