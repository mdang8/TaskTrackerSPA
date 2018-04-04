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
    console.log(action);
    params.dispatch(action);
  }

  function submit(ev) {
    api.submitTask(params.form);
    console.log(params.form);
  }

  function clear(ev) {
    params.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(params.users, (user) => <option key={user.id} value={user.id}>{user.name}</option>);

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
        <Label for="title">Title</Label>
        <Input type="text" name="title" value={params.form.title} onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" value={params.form.description} onChange={update} />
      </FormGroup>
      <Button onClick={submit} color="primary">Create</Button>
    </div>
  );
}

function state2props(state) {
  console.log('rerender', state);

  return { form: state.form };
}

export default connect(state2props)(TaskForm);

// export default function TaskForm(params) {
//   let users = _.map(params.users, (uu) => {
//     <option key={uu.id} value={uu.id}>{uu.name}</option>
//   });

//   return (
//     <div style={{ padding: "4ex" }}>
//       <h2>New Task</h2>
//       <FormGroup>
//         <Label for="user_id">User</Label>
//         <Input type="select" name="user_id">
//           {users}
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="title">Title</Label>
//         <Input type="text" name="title" />
//       </FormGroup>
//       <Button onClick={() => alert("TODO")}>Create</Button>
//     </div>
//   );
// }
