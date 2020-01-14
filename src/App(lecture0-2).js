import React from 'react';
import PropTypes from 'prop-types'; 

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    rating: 5
  },
  {
    id: 2,
    name: "samgyeopsal",
    rating: 4
  },
  {
    id: 3,
    name: "bibimbap",
    rating: 5
  },
  {
    id: 4,
    name: "doncasu",
    rating: 3
  },
  {
    id: 5,
    name: "kimbap",
    rating: 2
  }
]

function Food({ name, rating }) {
  return (
    <div>
    <h1>I Iike {name}</h1>
    <h1>{rating} / 5</h1>
    </div>
  ); 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};


function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}


export default App;
