import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASKS_LIST':
      return [...action.tasks];
    case 'ADD_TASK':
      alert('Task successfully created!');
      return [action.task, ...state];
    case 'UPDATE_TASK':
      return [action.task, ...state];
    case 'DELETE_TASK':
      return [action.tasks, ...state];
    case 'CREATE_TASK_ERROR':
      alert('Invalid task info.');
      return state;
    case 'DELETE_TASK_ERROR':
      alert('There was an error with deleting this task.');
      return state;
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
  assigned_id: '',
  title: '',
  description: '',
  duration: '',
  token: '',
};

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
      return empty_form;
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

const empty_login = {
  name: '',
  pass: '',
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    case 'LOGIN_ERROR':
      alert('Invalid login info.');
      return empty_login;
    default:
      return state;
  }
}

const empty_register = {
  name: '',
  pass: '',
  passConfirm: '',
};

function register(state = empty_register, action) {
  switch (action.type) {
    case 'UPDATE_REGISTER_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_REGISTER_FORM':
      return empty_register;
    case 'REGISTER_USER':
      alert('User successfully registered!');
      return Object.assign({}, empty_register, action.users);
    case 'REGISTER_ERROR':
      alert('Invalid user info.\nHere is the error message: ' + action.errorMsg);
      return empty_register;
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  let reducer = combineReducers({ tasks, users, form, token, login, register });
  let state1 = reducer(state0, action);

  return deepFreeze(state1);
}

let store = createStore(root_reducer);
export default store;
