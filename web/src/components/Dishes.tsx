import React, { useContext } from 'react';
import { Icon } from 'ts-react-feather-icons';
import ModalContext from '../components/modalContext';

import DishModal from '../components/DishModal';

import '../styles/components/dishes.css';

import { DishProps } from '../types/dish';
interface DishesProps {
  name: string;
  ingredients: string;
  price: number;
  dish: DishProps;
}

const Dishes: React.FC<DishesProps> = (props) => {
  const { showEditModal, editVisible } = useContext(ModalContext);

  return (
    <>
      <DishModal
        open={editVisible}
        title="Editar prato"
        button="Editar"
        id={props.dish.id}
        name={props.dish.name}
        ingredients={props.dish.ingredients}
        price={props.dish.price}
        calories={props.dish.calories}
        category={props.dish.category}
        image_url={props.dish.image_url}
        sideDishes={props.dish.sideDishes}
      />

      <div id="dish-container">
        <div>
          <h3> {props.name} </h3>
          <p> {props.ingredients} </p>
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
