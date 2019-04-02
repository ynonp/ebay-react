import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

function StarwarsFilm(props) {
  const [name, setName ] = useState('[ ... Loading... ]');

  useEffect(function() {
    setName('[... Loading ... ]');
    const $req = $.get(`https://swapi.co/api/films/${props.id}`, function(res) {
      setName(res.title);
    });
    return function() {
      $req.abort();
    }
  }, [props.id]);

  return name;
}

function StarwarsCharacter(props) {
  const style = { color: props.color };
  const [name, setName ] = useState('Loading...');

  useEffect(function() {
    setName('[... Loading ... ]');
    const $req = $.get(`https://swapi.co/api/people/${props.id}`, function(res) {
      setName(res.name);
    });
    return function() {
      $req.abort();
    }
  }, [props.id]);

  // Here I already returned the data
  return (
    <div>
      <p style={style}>My id is {props.id} and my name is {name}</p>
      <p>My Films:</p>
      <ul>
        <li>The empire strikes again</li>
      </ul>
    </div>
  )
}


