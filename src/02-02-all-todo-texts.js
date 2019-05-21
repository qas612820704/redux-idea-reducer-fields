import { createStore } from 'redux';
import reducer from './02-basic-object';

import { addTodo, delTodo, toggleTodo } from './actions';

const store = createStore(reducer);

store.dispatch(addTodo('hello'));
store.dispatch(addTodo('world'));
store.dispatch(addTodo('foo'));
store.dispatch(addTodo('bar'));
store.dispatch(toggleTodo(1));
store.dispatch(delTodo(2));


const todos = store.getState();

const allTodoTexts = Object.values(todos).map(todo => todo.text);
console.log(allTodoTexts);
