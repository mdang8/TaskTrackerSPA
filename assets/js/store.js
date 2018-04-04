import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 * state layout:
 * {
 *    tasks: [... Tasks ...],
 *    users: [... Users ...],
 *    board: {
 *      user_id: null,
 *      title: "",
 *      description: "",
 *    }
 * }
 * */

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASKS_LIST':
      return [...action.tasks];
    case 'ADD_TASK':
      return [action.task, ...state];
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'USERS_LIST':
      return [...action.users];
    default:
      return state;
  }
}

const empty_form = {
  user_id: '',
  title: '',
  description: '',
}

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  console.log('reducer', action);
  // {tasks: tasks, users: users, form: form}
  let reducer = combineReducers({tasks, users, form});
  let state1 = reducer(state0, action);
  console.log('state1', state1);
  
  return deepFreeze(state1);
}

let store = createStore(root_reducer);
export default store;
