import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import ITEM_TYPE from '../types/item';

import orderCropImage from '../assets/images/orderCrop.png';
import '../styles/components/orderCard.css';
import Order from '../types/order';
import BoardContext from './boardContext';

export interface OrderCardProps {
  className: string;
  isDragging?: boolean;
  item: Order;
  index: number;
  listIndex: number;
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
  const { setCardIdx, setDraggedListIdx } = useContext(BoardContext);
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
            <h5>Hamburguer</h5>
            <span className="observations">({props.item.observations})</span>
          </div>
        </div>
      </div>

      <div id="image-crop">
        <img src={orderCropImage} alt="Card crop" />
      </div>
    </div>
  );
};

export default OrderCard;
