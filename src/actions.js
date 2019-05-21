import * as $ from './constants';

let idCounter = 0;
export function addTodo(text) {
  return {
    type: $.ADD_TODO,
    payload: {
      id: ++idCounter,
      active: true,
      text,
    }
  }
}

export function toggleTodo(id) {
  return {
    type: $.TOGGLE_TODO,
    payload: { id },
  }
}
export function delTodo(id) {
  return {
    type: $.DEL_TODO,
    payload: { id },
  }
}
