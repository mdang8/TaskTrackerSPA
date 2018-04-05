import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(params) {
  function update(ev) {
    let target = $(ev.target);
    let data = {};
    data[target.attr('name')] = target.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };

    params.dispatch(action);
  }

  function submit(ev) {
    if (params.token != null) {
      if (Object.values(params.form).some(v => v == '')) {
        alert('You must fill in every field!');
      } else {
        if (Number(params.form.duration) % 15 !== 0) {
          alert('You must enter a duration number that is a multiple of 15!');
        } else {
          let newForm = Object.assign({}, params.form);
          newForm.completed = (params.form.completed === 'yes');
          api.submitTask(newForm);
        }
      }
    } else {
      alert('You are not logged in!');
    }
  }

  function clear(ev) {
    params.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(params.users, (user) =>
    <option key={user.id} value={user.id}>{user.name}</option>
  );

  return (
    <div style={{ padding: "4ex" }}>
      <h2>New Task</h2>
      <FormGroup>
        <Label for="user_id">User</Label>
        <Input type="select" name="user_id" value={params.form.user_id} onChange={update}>
          {users}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="assigned_id">Assignee</Label>
        <Input type="select" name="assigned_id" value={params.form.assigned_id} onChange={update}>
          <option key="0" defaultValue>Select a user to assign this task</option>
          {users}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" value={params.form.title} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" value={params.form.description} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Duration</Label>
        <Input type="number" step="15" name="duration" value={params.form.duration} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="completed">Completed</Label>
        <Input type="select" name="completed" value={params.form.completed} onChange={update}>
          <option value="no" defaultValue>No</option>
          <option value="yes">Yes</option>
        </Input>
      </FormGroup>
      <Button style={{ marginRight: "1ex" }} onClick={submit} color="primary">Create</Button>
      <Button onClick={clear}>Clear</Button>
    </div>
  );
}

function state2props(state) {
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(TaskForm);
