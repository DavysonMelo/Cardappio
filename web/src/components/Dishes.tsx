import React from 'react';
import { Icon } from 'ts-react-feather-icons';

import '../styles/components/dishes.css';

interface DishesProps {
  title: string;
  description: string;
}

const Dishes: React.FC<DishesProps> = (props) => {
  return (
    <div id="dish-container">
      <div>
        <h3> {props.title} </h3>
        <p> {props.description} </p>
      </div>

      <div id="dish-buttons">
        <div id="edit" className="button">
          <button>
            <Icon name="edit" size={26} color="#000" />
          </button>
        </div>

        <div id="X" className="button">
          <button>
            <Icon name="x" size={26} color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
