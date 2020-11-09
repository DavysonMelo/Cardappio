import React from 'react';
import { useDrag, useDragLayer } from 'react-dnd';

import orderCropImage from '../assets/images/orderCrop.png';
import {
  CardContainer,
  OrderIdTable,
  CardContent,
  ImageCrop,
  Observations,
  OrderInfoContainer,
  OrderRow,
} from '../styles/ts/orderCard';

export interface OrderCardProps {
  className: string;
  isDragging?: boolean;
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <CardContainer
      id="card-container"
      className={props.className}
      ref={dragRef}
      isDragging={isDragging}
    >
      <CardContent>
        <OrderIdTable>
          <span>Pedido #1</span>
          <span>Mesa: 1</span>
        </OrderIdTable>

        <OrderInfoContainer>
          <OrderRow>
            <h5>Hamburguer</h5>
            <Observations>(Sem maionese, sem ketchup)</Observations>
          </OrderRow>
          <OrderRow>
            <h5>Guaraná (500ml)</h5>
            <Observations>(Com Gelo)</Observations>
          </OrderRow>
        </OrderInfoContainer>
      </CardContent>

      <ImageCrop>
        <img src={orderCropImage} alt="Card crop" />
      </ImageCrop>
    </CardContainer>
  );
};

export default OrderCard;
