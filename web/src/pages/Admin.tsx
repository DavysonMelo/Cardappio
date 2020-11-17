import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../components/modalContext';

import '../styles/global.css';
import '../styles/pages/admin.css';

import Dishes from '../components/Dishes';
import DishModal from '../components/DishModal';

import { Icon } from 'ts-react-feather-icons';
import logoImg from '../assets/logoAdmin.svg';

import { DishProps } from '../types/dish';
import api from '../services/api';

function Admin() {
  const { showAddModal, addVisible } = useContext(ModalContext);

  const [dishes, setDishes] = useState<DishProps[]>([] as DishProps[]);

  useEffect(() => {
    async function loadDishes() {
      try {
        const response = await api.get(`dishes`);
        setDishes(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadDishes();
  }, []);

  return (
    <>
      <DishModal open={addVisible} title="Adicionar prato" />

      <div id="page-admin">
        <aside id="side-bar">
          <div className="log-Out">
            <button>
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
                <option label="Massas" value="Massas" />
                <option label="Bebidas" value="Bebidas" />
                <option label="Hamburguers" value="Hamburguers" />
                <option label="Sushis" value="Sushis" />
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
                  <Icon name="plus" size={30} color="#FFF" />
                </button>
              </div>
            </div>

            <div id="dishes-list">
              {dishes.map((dish) => (
                <Dishes
                  key={dish.id}
                  name={dish.name}
                  ingredients={dish.ingredients}
                  price={dish.price}
                  dish={dish}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin;
