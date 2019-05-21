import * as $ from '../constants';

const todo = (state = {}, action) => {
  switch (action.type) {
    case $.ADD_TODO:
      return action.payload;
    case $.DEL_TODO:
      return undefined;
    case $.TOGGLE_TODO:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
}

export default todo;
