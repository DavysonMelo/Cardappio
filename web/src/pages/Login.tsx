import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import UserInterface from '../types/user';

import '../styles/global.css';
import '../styles/pages/login.css';

import logo from '../assets/logoLogin.svg';
import swal from 'sweetalert';

function Login() {
  const [userName, setUserName] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const history = useHistory();

  function swalPopUp() {
    swal({
      title: 'Usuário não encontrado',
      text: 'Nome de usuário ou a senha estão incorretos',
      icon: 'error',
      buttons: {
        confirm: { visible: true, text: 'Ok' },
      },
    });
  }

  async function login(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', {
        userName,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigateTo(response.data);
    } catch (error) {
      swalPopUp();
      setUserName('');
      setPassword('');
    }
  }

  function navigateTo(user: UserInterface) {
    console.log(user.role);
    if (user.role === 'administrator') {
      history.push('/admin', user);
    } else if (user.role === 'kitchen') {
      history.push('/kitchen', user);
    }
  }

  return (
    <div id="container">
      <div id="left-sidebar">
        <img src={logo} alt="Cardappio" />
      </div>

      <div id="login-container">
        <label id="login-label">LOGIN</label>
        <div id="login-box">
          <form>
            <label className="label">Usuário</label>
            <input
              className="input"
              type="text"
              name="user"
              value={userName as string}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <label className="label">Senha</label>
            <input
              className="input"
              type="password"
              name="password"
              value={password as string}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" onClick={login}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
