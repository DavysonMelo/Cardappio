import React, { useContext } from 'react';
import { Icon } from 'ts-react-feather-icons';
import ModalContext from '../components/modalContext';

import DishModal from '../components/DishModal';

import '../styles/components/dishes.css';

interface DishesProps {
  title: string;
  description: string;
  price: string;
}

const Dishes: React.FC<DishesProps> = (props) => {
  const { showEditModal, editVisible } = useContext(ModalContext);

  return (
    <>
      <DishModal
        open={editVisible}
        title="Editar prato"
        name="Lasanha de carne"
        price={props.price}
        image="www.blablabla.com.br/ttt"
      />

      <div id="dish-container">
        <div>
          <h3> {props.title} </h3>
          <p> {props.description} </p>
          {props.price}
        </div>

        <div id="dish-buttons">
          <div id="edit" className="button">
            <button
              onClick={() => {
                showEditModal();
              }}
            >
              <Icon name="edit" size={24} color="#000" />
            </button>
          </div>

          <div id="X" className="button">
            <button>
              <Icon name="x" size={28} color="#FFF" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishes;
