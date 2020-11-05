import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/login.css';

import logo from '../assets/logo.svg';

function Login() {
  return (
    <div id="container">
      <div id="left-sidebar">
        <img src={logo} alt="Cardappio" />
      </div>

      <div id="login">
        <label id="login-label">LOGIN</label>
        <div id="login-box">
          <form action="">
            <label className="label">Usuário</label>
            <input className="input" type="text" />

            <label className="label">Senha</label>
            <input className="input" type="password" />

            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
