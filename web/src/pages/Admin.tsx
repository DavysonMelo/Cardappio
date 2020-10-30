import React from 'react';
import { Icon } from 'ts-react-feather-icons';

import '../styles/global.css';
import '../styles/pages/admin.css';

import Dishes from '../components/Dishes';

import logoImg from '../assets/Logo.svg';

function Admin() {
  return (
    <div id="page-admin">
      <aside id="side-bar">
        <div className="log-Out">
          <button>
            <Icon name="log-out" size={35} color="#FFFF" />
          </button>
        </div>

        <div id="logo-Img">
          <img src={logoImg} alt="Logo Cardappio" />
        </div>
      </aside>

      <main id="content-container">
        <div id="search-categories-container">
          <div id="select-categories">
            <select name="categories">
              <option id="default-category" disabled selected hidden>
                Selecione uma categoria
              </option>
              <option label="Massas" />
              <option label="Bebidas" />
              <option label="Hamburguers" />
              <option label="Sushis" />
            </select>
          </div>

          <div id="search-dishes">
            <div id="search-input">
              <input type="text" placeholder="Pesquisa de item" />
            </div>

            <div id="click-search-input">
              <button>
                <Icon name="search" size={20} color="#000" />
              </button>
            </div>
          </div>
        </div>

        <div id="dishes-container">
          <div id="title-plus">
            Cardápio
            <div id="plus-button">
              <button>
                <Icon name="plus" size={26} color="#FFF" />
              </button>
            </div>
          </div>

          <div id="dishes-list">
            <Dishes
              title="Hamburguer de carne"
              description="Acompanha alface, tomate, picles e molho especial"
            />
            <Dishes
              title="Lasanha de frango"
              description="Requintada com bastante molho"
            />
            <Dishes
              title="Arroz com Bife acebolado"
              description="200g de arroz, farofa, molho e bife"
            />
            <Dishes
              title="Pizza de calabresa"
              description="Tomate, queijo, calabresa"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
