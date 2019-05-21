import { combineReducers } from 'redux';
import * as $ from '../constants';

const id = (state = 0, action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return action.payload.id;
    default:
      return state;
  }
}

const text = (state = '', action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return action.payload.text;
    default:
      return state;
  }
}

const active = (state = false, action) => {
  switch (action.type) {
    case $.TOGGLE_TODO:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  id,
  text,
  active,
});
