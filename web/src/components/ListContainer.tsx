import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import OrderCard from '../components/OrderCard';
import '../styles/components/listContainer.css';
import ITEM_TYPE from '../types/item';
import Order from '../types/order';
import BoardContext from '../components/boardContext';

interface ListProps {
  index: number;
  orderList: Order[];
}

const ListContainer: React.FC<ListProps> = (props) => {
  const list = props.orderList;
  const targetListIndex = props.index;
  const { move, cardIndex, draggedListIndex } = useContext(BoardContext);
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: () => {
      move(cardIndex, draggedListIndex, targetListIndex);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      style={
        isOver ? { backgroundColor: '#283142' } : { backgroundColor: '#42506a' }
      }
      className="list-container"
    >
      {list !== undefined && list.length > 0 ? (
        list.map((item, index) => (
          <OrderCard
            className="orderCard"
            key={item.id}
            index={index}
            listIndex={props.index}
            item={item}
          />
        ))
      ) : props.index !== 0 ? (
        <span className="noTextSelect" style={{ color: '#ababab' }}>
          Arraste um pedido
        </span>
      ) : (
        <span className="noTextSelect" style={{ color: '#ababab' }}>
          Aguardando pedidos
        </span>
      )}
    </div>
  );
};

export default ListContainer;
