import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Input, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

let LoginForm = connect(({ login }) => {
  return { login };
})((props) => {
  function update(ev) {
    let target = $(ev.target);
    let data = {};
    data[target.attr('name')] = target.val();

    props.dispatch({
      type: 'UPDATE_LOGIN_FORM',
      data: data,
    });
  }

  function create_token(ev) {
    api.submitLogin(props.login);
  }

  return (
    <div className="navbar-text">
      <Form inline>
        <FormGroup>
          <Input type="text" name="name" placeholder="name" value={props.login.name} onChange={update} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="pass" placeholder="password" value={props.login.pass} onChange={update} />
        </FormGroup>
        <Button color="success" onClick={create_token}>Log In</Button>
      </Form>
    </div>
  );
});

let Session = connect(({ token }) => {
  return { token };
})((props) => {
  function logOut() {
    props.dispatch({ type: 'LOGOUT' });
  }

  return (
    <div>
      <div style={{ paddingRight: "2ex" }} className="navbar-text">
        Logged in as: <b>{props.token.name}</b>
      </div>
      <Link to="#" onClick={logOut}><Button color="danger">Log Out</Button></Link>
    </div>
  );
});

function Nav(props) {
  let session_info;

  if (props.token) {
    session_info = <Session token={props.token} />;
  } else {
    session_info = <LoginForm />;
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <span className="navbar-brand">
        Task Tracker
      </span>
      <ul className="navbar-nav mr-auto">
        <NavItem>
          <NavLink to="/" exact={true} className="nav-link">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users" href="#" className="nav-link">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tasks" href="#" className="nav-link">Tasks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/new/task" href="#" className="nav-link">New Task</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/new/user" href="#" className="nav-link">Register User</NavLink>
        </NavItem>
      </ul>
      {session_info}
    </nav>
  );
}

function state2props(state) {
  return {
    token: state.token,
  }
}

export default connect(state2props)(Nav);
