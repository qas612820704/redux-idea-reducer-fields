import * as $ from '../constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case $.DEL_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case $.TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.payload.id
        ? {
          ...todo,
          active: !todo.active,
        }
        : todo
      );
    default:
      return state;
  }
}

export default todos;
