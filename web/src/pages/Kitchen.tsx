import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'ts-react-feather-icons';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardContext from '../components/boardContext';

import swal from 'sweetalert';

import ListContainer from '../components/ListContainer';
import logoKitchen from '../assets/logoKitchen.svg';

import '../styles/pages/kitchen.css';
import orderList from '../types/orderList';

let data: orderList;

data = {
  orders: [
    {
      id: '12312312',
      number: 1,
      dishID: '1',
      tableNumber: 1,
      observations: 'bla bla bla',
      status: 'recebido',
    },
    {
      id: '12312313',
      number: 2,
      dishID: '1',
      tableNumber: 2,
      observations: 'oi oi oi ',
      status: 'recebido',
    },
  ],
};

function Kitchen() {
  const history = useHistory();
  const { lists, loadList } = useContext(BoardContext);

  useEffect(() => {
    const receivedList = data;
    const preparingList = { orders: [] };
    const doneList = { orders: [] };
    function setData() {
      loadList([
        receivedList as orderList,
        preparingList as orderList,
        doneList as orderList,
      ]);
    }
    setData();
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

  return (
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
  );
}

export default Kitchen;
