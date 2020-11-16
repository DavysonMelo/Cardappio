import React, { useContext } from 'react';
import { Icon } from 'ts-react-feather-icons';
import ModalContext from '../components/modalContext';

import '../styles/global.css';
import '../styles/pages/admin.css';

import Dishes from '../components/Dishes';
import DishModal from '../components/DishModal';

import logoImg from '../assets/logoAdmin.svg';

function Admin() {
  const { showAddModal, addVisible } = useContext(ModalContext);

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
              <Dishes
                title="Hamburguer de carne"
                description="Acompanha alface, tomate, picles e molho especial"
                price="R$ 22,00"
              />
              <Dishes
                title="Lasanha de frango"
                description="Requintada com bastante molho"
                price="R$ 15,00"
              />
              <Dishes
                title="Arroz com Bife acebolado"
                description="200g de arroz, farofa, molho e bife"
                price="R$ 30,00"
              />
              <Dishes
                title="Pizza de calabresa"
                description="Tomate, queijo, calabresa"
                price="R$ 39,50"
              />
              <Dishes
                title="Pizza de calabresa"
                description="Tomate, queijo, calabresa"
                price="R$ 39,50"
              />
              <Dishes
                title="Pizza de calabresa"
                description="Tomate, queijo, calabresa"
                price="R$ 39,50"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin;
