import React, { useContext } from 'react';
import { Icon } from 'ts-react-feather-icons';

import ModalContext from '../components/modalContext';

import swal from 'sweetalert';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

import '../styles/components/dishes.css';

import api from '../services/api';
import { DishProps } from '../types/dish';
interface DishesProps {
  dish: DishProps;
}

const Dishes: React.FC<DishesProps> = ({ dish }) => {
  const { showEditModal, setDish } = useContext(ModalContext);

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
        window.location.reload();
      }
    });
  }

  async function dishDelete() {
    try {
      await api.delete(`dishes/${dish.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div id="dish-container">
        <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
          <div>
            <h3> {dish.name} </h3>
            <p> {dish.ingredients.join(', ')} </p>
            <FormattedNumber
              value={dish.price}
              style="currency"
              currency="BRL"
            />
          </div>
        </IntlProvider>

        <div id="dish-buttons">
          <div id="edit" className="button">
            <button
              onClick={() => {
                setDish(dish);
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
