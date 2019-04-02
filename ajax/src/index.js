import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

class LifecycleDemo extends React.Component {
}

function useApi(type, fieldToReturn, props, initialValue) {
  const [name, setName ] = useState(initialValue);
  useEffect(function() {
    setName(initialValue);
    const $req = $.get(`https://swapi.co/api/${type}/${props.id}/`, function(res) {
      setName(res[fieldToReturn]);
    });
    return function() {
      $req.abort();
    }
  }, [props.id]);
  return name;
}

function StarwarsFilm(props) {
  const name = useApi('films', 'title', props, '[... Loading Film ...]');
  return name;
}

function StarwarsCharacter(props) {
  const style = { color: props.color };
  const name = useApi('people', 'name', props, '[... Loading person ...]');
  const films = useApi('people', 'films', props, []);

  function getFilmIdFromUrl(url) {
    return url.match(/\/(\d+)\/$/)[1];
  }

  // Here I already returned the data
  return (
    <div>
      <p style={style}>My id is {props.id} and my name is {name}</p>
      <p>My Films:</p>
      <ul>
        {films.map(url => (
          <li key={url}>
            <StarwarsFilm id={getFilmIdFromUrl(url)} />
          </li>
          ))}
      </ul>
    </div>
  )
}

function App(props) {
  const [ isVisible, setVisible ] = useState(true);
  const [ name, setName ] = useState('demo');
  const colors = ['red', 'blue', 'green', 'white', 'gray', 'orange', 'pink'];
  const [ color, setColor ] = useState(_.sample(colors));
  const [ id, setId ] = useState(_.random(20));

  function changeId() {
    setId(_.random(20));
  }


  function changeColor() {
    setColor(_.sample(colors));
  }

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Show/Hide</button>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeId}>Change Id</button>
      <StarwarsCharacter id={id} color={color} />
      <p>Hello World</p>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
