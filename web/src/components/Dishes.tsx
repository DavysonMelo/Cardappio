import React, { useContext } from 'react';
import { Icon } from 'ts-react-feather-icons';
import { useHistory } from 'react-router-dom';

import ModalContext from '../components/modalContext';

import swal from 'sweetalert';
import DishModal from '../components/DishModal';

import '../styles/components/dishes.css';

import api from '../services/api';
import { DishProps } from '../types/dish';
interface DishesProps {
  dish: DishProps;
}

const Dishes: React.FC<DishesProps> = ({ dish }) => {
  const { showEditModal, editVisible } = useContext(ModalContext);
  const history = useHistory();

  function swalDelete() {
    swal({
      title: 'Esse prato será deletado',
      text: 'Tem certeza que deseja deletar?',
      icon: 'warning',
      timer: 10000,
      dangerMode: true,
      buttons: {
        cancel: { visible: true, text: 'Cancelar' },
        confirm: { visible: true, text: 'Apagar' },
      },
    }).then((willConfirm) => {
      if (willConfirm) {
        dishDelete();
        history.push('/admin');
      }
    });
  }

  async function dishDelete() {
    try {
      const response = await api.delete(`dishes/${dish.id}`);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <DishModal
        open={editVisible}
        title="Editar prato"
        button="Editar"
        id={dish.id}
        name={dish.name}
        ingredients={dish.ingredients}
        price={dish.price}
        calories={dish.calories}
        category={dish.category}
        image_url={dish.image_url}
        sideDishes={dish.sideDishes}
      />
      <div id="dish-container">
        <div>
          <h3> {dish.name} </h3>
          <p> {dish.ingredients} </p>
          {dish.price}
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
            <button
              onClick={() => {
                swalDelete();
              }}
            >
              <Icon name="x" size={28} color="#FFF" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishes;
