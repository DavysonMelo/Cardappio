import React from 'react';
import { Icon } from 'ts-react-feather-icons';

import logoKitchen from '../assets/logoKitchen.svg';

import '../styles/pages/kitchen.css';

function Kitchen() {
  return (
    <div id="kitchen-container">
      <header>
        <div>
          <img src={logoKitchen} alt="Logo cardappio" />
        </div>
        <div>
          <button>
            <Icon name="log-out" size={30} color="#FFF" />
          </button>
        </div>
      </header>

      <div id="status-title-container">
        <div className="status-title" style={{ backgroundColor: '#CE2424' }}>
          <span>Recebido</span>
        </div>
        <div className="status-title" style={{ backgroundColor: '#FDCF2E' }}>
          <span>Preparando</span>
        </div>
        <div className="status-title" style={{ backgroundColor: '#36AC42' }}>
          <span>Pronto</span>
        </div>
      </div>

      <div id="order-status-container">
        <div className="order-container"></div>
        <div className="order-container"></div>
        <div className="order-container"></div>
      </div>
    </div>
  );
}

export default Kitchen;
