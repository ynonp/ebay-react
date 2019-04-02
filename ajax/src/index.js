import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

class LifecycleDemo extends React.Component {
}

function StarwarsCharacter(props) {
  const style = { color: props.color };
  const [name, setName ] = useState('Loading...');

  useEffect(function() {
    $.get(`https://swapi.co/api/people/${props.id}`, function(res) {
      setName(res.name);
    });
  }, [props.id]);

  // Here I already returned the data
  return <p style={style}>My id is {props.id} and my name is {name}</p>
}

function App(props) {
  const [ isVisible, setVisible ] = useState(true);
  const [ name, setName ] = useState('demo');
  const colors = ['red', 'blue', 'green', 'white', 'gray', 'orange', 'pink'];
  const [ color, setColor ] = useState(_.sample(colors));

  function changeColor() {
    setColor(_.sample(colors));
  }

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Show/Hide</button>
      <button onClick={changeColor}>Change Color</button>
      <StarwarsCharacter id={1} color={color} />
      <p>Hello World</p>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
