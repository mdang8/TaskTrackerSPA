import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function UserForm(params) {
  function update(ev) {
    let target = $(ev.target);
    let data = {};
    data[target.attr('name')] = target.val();
    let action = {
      type: 'UPDATE_REGISTER_FORM',
      data: data,
    };

    params.dispatch(action);
  }

  function submit(ev) {
    if (Object.values(params.form).some(v => v == '')) {
      alert('You must fill in every field!');
    } else {
      if (params.form.pass !== params.form.passConfirm) {
        alert('The passwords do not match.');
      } else {
        api.registerUser(params.form);
      }
    }
  }

  function clear(ev) {
    params.dispatch({
      type: 'CLEAR_REGISTER_FORM',
    });
  }

  return (
    <div style={{ padding: "4ex" }}>
      <h2>Register User</h2>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" value={params.form.name} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="pass">Password</Label>
        <Input type="password" name="pass" value={params.form.pass} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="passConfirm">Confirm Password</Label>
        <Input type="password" name="passConfirm" value={params.form.passConfirm} onChange={update} />
      </FormGroup>
      <Button style={{ marginRight: "1ex" }} color="primary" onClick={submit}>Register</Button>
      <Button onClick={clear}>Clear</Button>
    </div>
  );
}

function state2props(state) {
  return {
    form: state.register,
    users: state.users,
  };
}

export default connect(state2props)(UserForm);
