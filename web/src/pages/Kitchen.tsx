import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import socketio from 'socket.io-client';
import { Icon } from 'ts-react-feather-icons';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardContext from '../components/boardContext';

import swal from 'sweetalert';

import ListContainer from '../components/ListContainer';
import logoKitchen from '../assets/logoKitchen.svg';

import '../styles/pages/kitchen.css';
import orderList from '../types/orderList';
import api from '../services/api';
import UserInterface from '../types/user';
import Order from '../types/order';

function Kitchen() {
  const history = useHistory();
  const { lists, loadList } = useContext(BoardContext);
  const [orders, setOrders] = useState<Order[]>([] as Order[]);
  const [ordersPrep, setOrdersPrep] = useState<Order[]>([] as Order[]);
  const [ordersDone, setOrdersDone] = useState<Order[]>([] as Order[]);
  const [user, setUser] = useState<UserInterface>({} as UserInterface);

  async function getOrders() {
    const response = await api.get('orders', {
      headers: { status: 'recebido' },
    });
    const resp = await api.get('orders', {
      headers: { status: 'preparando' },
    });
    const res = await api.get('orders', {
      headers: { status: 'pronto' },
    });
    let list: Order[];
    let listPrep: Order[];
    let listDone: Order[];
    list = response.data;
    listPrep = resp.data;
    listDone = res.data;
    if (list.length !== 0) {
      list.map((item) => {
        setOrders((old) => [...old, item]);
      });
    }
    if (listPrep.length !== 0) {
      listPrep.map((item) => {
        setOrdersPrep((old) => [...old, item]);
      });
    }
    if (listDone.length !== 0) {
      listDone.map((item) => {
        setOrdersDone((old) => [...old, item]);
      });
    }
  }

  function getUser() {
    const res = localStorage.getItem('user');
    if (res) {
      const parsedUser = JSON.parse(res);
      setUser(parsedUser);
    }
  }

  useEffect(() => {
    getUser();
    getOrders();
    const socket = socketio('http://localhost:3333', {
      transports: ['websocket'],
    });
    socket.on('order', async (order: Order) => {
      setOrders((old) => [...old, order]);
    });
  }, []);

  useEffect(() => {
    const receivedList = { orders: orders };
    const preparingList = { orders: ordersPrep };
    const doneList = { orders: ordersDone };
    function setData() {
      loadList([
        receivedList as orderList,
        preparingList as orderList,
        doneList as orderList,
      ]);
    }
    setData();
  }, [orders, ordersPrep, ordersDone]);

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
        localStorage.clear();
        history.push('/');
      }
    });
  }

  if (
    JSON.parse(localStorage.getItem('user') as string) &&
    JSON.parse(localStorage.getItem('user') as string).role === 'kitchen'
  ) {
    return (
      <>
        <DndProvider backend={HTML5Backend}>
          <div id="kitchen-container">
            <header>
              <div>
                <img src={logoKitchen} alt="Logo cardappio" />
              </div>
              <div>
                <button onClick={swalPopUp}>
                  <Icon name="log-out" size={30} color="#FFF" />
                </button>
              </div>
            </header>

            <div id="status-title-container">
              <div
                className="status-title noTextSelect"
                style={{ backgroundColor: '#CE2424' }}
              >
                <span>Recebido</span>
              </div>
              <div
                className="status-title noTextSelect"
                style={{ backgroundColor: '#FDCF2E' }}
              >
                <span>Preparando</span>
              </div>
              <div
                className="status-title noTextSelect"
                style={{ backgroundColor: '#36AC42' }}
              >
                <span>Pronto</span>
              </div>
            </div>
            <div id="order-status-container">
              {lists !== undefined && lists.length > 0 ? (
                lists.map((item, index) => (
                  <ListContainer
                    key={index}
                    index={index}
                    orderList={item.orders}
                  />
                ))
              ) : (
                <h1>Nenhum pedido</h1>
              )}
            </div>
          </div>
        </DndProvider>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Kitchen;
