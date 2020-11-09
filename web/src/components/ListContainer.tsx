import React from 'react';

import OrderCard from '../components/OrderCard';

import { ListStyle } from '../styles/ts/listContainer';

function ListContainer(props: any) {
  return (
    <ListStyle>
      <OrderCard className="orderCard" />
      <OrderCard className="orderCard" />
      <OrderCard className="orderCard" />
    </ListStyle>
  );
}

export default ListContainer;
