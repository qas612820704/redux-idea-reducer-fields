import { createStore } from 'redux';
import reducer from './01-basic-array';

import { addTodo } from './actions';

const store = createStore(reducer);

store.dispatch(addTodo('hello'));
store.dispatch(addTodo('world'));

const todos = store.getState();

console.log(todos);
