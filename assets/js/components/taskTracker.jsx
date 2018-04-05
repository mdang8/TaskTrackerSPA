import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import TaskForm from './taskForm';
import Board from './board';
import ListTasks from './listTasks';
import Users from './users';
import UserForm from './userForm';

export default function taskTracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TaskTracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

let TaskTracker = connect((state) => state)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() =>
          <div id="home-div">
            <h1 id="home-header">Welcome to TaskTracker (SPA Version)!</h1>
            {/*<Board tasks={props.tasks} />*/}
          </div>
        } />
        <Route path="/users" exact={true} render={() =>
          <Users users={props.users} />
        } />
        <Route path="/tasks" exact={true} render={() =>
          <ListTasks tasks={props.tasks} token={props.token} />
        } />
        <Route path="/users/:user_id" render={({ match }) =>
          <ListTasks token={props.token} tasks={_.filter(props.tasks, (task) => {
            return match.params.user_id == task.assigned.id;
          })
          } />
        } />
        <Route path="/new/task" exact={true} render={() =>
          <TaskForm token={props.token} />
        } />
        <Route path="/new/user" exact={true} render={() =>
          <UserForm />
        } />
      </div>
    </Router>
  );
});
