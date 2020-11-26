import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';
import ITEM_TYPE from '../types/item';

import orderCropImage from '../assets/images/orderCrop.png';
import '../styles/components/orderCard.css';
import BoardContext from './boardContext';
import Order from '../types/order';

export interface OrderCardProps {
  className: string;
  isDragging?: boolean;
  item: Order;
  index: number;
  listIndex: number;
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
  const { setCardIdx, setDraggedListIdx, getCardId } = useContext(BoardContext);
  const index = props.index;
  const listIndex = props.listIndex;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    begin: () => {
      setCardIdx(index);
      setDraggedListIdx(listIndex);
      getCardId(props.item._id);
    },
  });

  return (
    <div
      id="card-container"
      ref={drag}
      style={
        isDragging
          ? { opacity: 0, cursor: 'grabbing' }
          : { opacity: 1, cursor: 'grab' }
      }
      className={props.className}
    >
      <div id="card-content">
        <div id="order-id-table">
          <span>Pedido #{props.item.number}</span>
          <span>Mesa: {props.item.tableNumber}</span>
        </div>

        <div id="order-info-container">
          <div id="order-row">
            {props.item.dishName.map((dish) => {
              return <h5 key={dish}>{dish}</h5>;
            })}
            <p className="observations">
              <strong>Observações: </strong>(
              {props.item.observations.join(', ')})
            </p>
            <p className="observations">
              <strong>Adicionais: </strong>({props.item.additional?.join(', ')})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
