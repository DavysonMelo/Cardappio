import React from 'react';

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

      <div id="dish-buttons"></div>
    </div>
  );
};

export default Dishes;
