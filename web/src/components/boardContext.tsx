import React from 'react';
import { createContext, useState } from 'react';
import orderList from '../types/orderList';
import produce from 'immer';

interface IBoardContext {
  lists: orderList[];
  move(card: number, from: number, to: number): void;
  loadList(list: orderList[]): void;
  setCardIdx(cardIndex: number): void;
  cardIndex: number;
  setDraggedListIdx(listIndex: number): void;
  draggedListIndex: number;
  cardId: String;
  getCardId(cardid: String): void;
}

const BoardContext = createContext<IBoardContext>({} as IBoardContext);

export const BoardProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<orderList[]>([] as orderList[]);
  const [cardIndex, setCardIndex] = useState(Number);
  const [draggedListIndex, setDraggedListIndex] = useState(Number);
  const [cardId, setCardId] = useState<String>('');

  function getCardId(cardId: String) {
    setCardId(cardId);
  }

  function loadList(list: orderList[]) {
    setLists(list);
  }

  function setCardIdx(cardIndex: number) {
    setCardIndex(cardIndex);
  }

  function setDraggedListIdx(listIndex: number) {
    setDraggedListIndex(listIndex);
  }

  function move(card: number, from: number, to: number) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[from].orders[card];

        draft[from].orders.splice(card, 1);
        draft[to].orders.splice(to, 0, dragged);
      })
    );

    if (to === 2) {
      setTimeout(() => {
        window.location.reload();
      }, 10000);
    }
  }

  return (
    <BoardContext.Provider
      value={{
        lists,
        move,
        loadList,
        setCardIdx,
        cardIndex,
        setDraggedListIdx,
        draggedListIndex,
        cardId,
        getCardId,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
