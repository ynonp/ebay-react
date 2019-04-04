import $ from 'jquery';
import _ from 'lodash';

export function createRandomMessage(dispatch, state) {
  const id = _.random(1, 20);
  // dispatch('show spinner');

  $.get(`https://swapi.co/api/people/${id}/`, res => {
    // add message from res.name
    dispatch({
      type: 'ADD_MESSAGE',
      payload: {
        from: res.name,
        text: 'hello!',
      }
    })
  });
}