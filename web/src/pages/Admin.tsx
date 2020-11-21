import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModalContext from '../components/modalContext';

import '../styles/global.css';
import '../styles/pages/admin.css';

import swal from 'sweetalert';

import Dishes from '../components/Dishes';
import DishModal from '../components/DishModal';

import { Icon } from 'ts-react-feather-icons';
import logoImg from '../assets/logoAdmin.svg';

import { DishProps, CategoryProp } from '../types/dish';
import api from '../services/api';

function Admin() {
  const { showAddModal, addVisible } = useContext(ModalContext);
  const history = useHistory();

  const [dishes, setDishes] = useState<DishProps[]>([] as DishProps[]);
  const [categories, setCategories] = useState<CategoryProp[]>(
    [] as CategoryProp[]
  );

  useEffect(() => {
    async function loadDishes() {
      try {
        const response = await api.get(`dishes`);
        const categories = await api.get('categories');
        setDishes(response.data);
        setCategories(categories.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadDishes();
  }, []);

  function swalPopUp() {
    swal({
      title: 'Você está sendo deslogado',
      text: 'Tem certeza que deseja sair?',
      icon: 'warning',
      timer: 10000,
      dangerMode: true,
      buttons: {
        cancel: { visible: true, text: 'Cancelar' },
        confirm: { visible: true, text: 'Sair' },
      },
    }).then((willConfirm) => {
      if (willConfirm) {
        history.push('/');
      }
    });
  }

  function filterClick() {
    api.get('/dishes-category', { headers: { categories } });
  }

  return (
    <>
      <DishModal open={addVisible} title="Adicionar prato" button="Adicionar" />

      <div id="page-admin">
        <aside id="side-bar">
          <div className="log-Out">
            <button onClick={swalPopUp}>
              <Icon name="log-out" size={35} color="#FFFF" />
            </button>
          </div>

          <div id="logo-Img">
            <img id="img" src={logoImg} alt="Logo Cardappio" />
          </div>
        </aside>

        <main id="content-container">
          <div id="search-categories-container">
            <div id="select-categories">
              <select name="categories">
                <option id="default-category" value="" disabled selected hidden>
                  Selecione uma categoria
                </option>
                {categories.map((dish) => (
                  <option
                    label={dish.category}
                    value={dish.category}
                    onClick={filterClick}
                  />
                ))}
              </select>
            </div>

            <div id="search-dishes">
              <input type="text" placeholder="Pesquisa de item" />

              <div id="click-search-input">
                <button type="submit">
                  <Icon name="search" size={20} color="#000" />
                </button>
              </div>
            </div>
          </div>

          <div id="dishes-container">
            <div id="title-plus">
              <h2>Cardápio</h2>
              <div id="plus-button">
                <button
                  onClick={() => {
                    showAddModal();
                  }}
                >
                  <Icon name="plus" size={33} color="#FFF" />
                </button>
              </div>
            </div>

            <div id="dishes-list">
              {dishes.map((dish) => (
                <Dishes key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin;
