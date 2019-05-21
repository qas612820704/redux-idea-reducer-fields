import { combineReducers } from 'redux';
import * as $ from '../constants';


const byId = (state = {}, action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case $.DEL_TODO:
      const { [action.payload.id]: toRemoveTodo, ...restState } = state;
      return restState;

    case $.TOGGLE_TODO:
      const targetTodo = state[action.payload.id];
      return {
        ...state,
        [targetTodo.id]: {
          ...targetTodo,
          active: !targetTodo.active,
        }
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
