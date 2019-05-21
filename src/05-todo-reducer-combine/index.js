import { combineReducers } from 'redux';
import * as $ from '../constants';

import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
    case $.ADD_TODO:
    case $.DEL_TODO:
    case $.TOGGLE_TODO:
      return {
        ...state,
        [action.payload.id]: todo(state[action.payload.id], action),
      };
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return [...state, action.payload.id];
    case $.DEL_TODO:
      return state.filter(id => action.payload.id !== id);
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
