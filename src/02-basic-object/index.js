import * as $ from '../constants';

const todos = (state = {}, action) => {
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

export default todos;
