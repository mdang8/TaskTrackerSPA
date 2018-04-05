import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import TaskForm from './taskForm';
import api from '../api';

export default function Task(params) {
  function deleteTask() {
    if (params.token != null) {
      if (params.token.user_id !== task.user.id) {
        alert('You cannot delete this task because you are not the one who created it.');
      } else {
        api.deleteTask(params.task);
      }
    } else {
      alert('You are not logged in!');
    }
  }

  const task = params.task;

  return <Card>
    <CardBody>
      <div>
        <p><b>Title: </b>{task.title}</p>
        <p><b>Description: </b>{task.description}</p>
        <p><b>Created by: </b>{task.user.name}</p>
        <p><b>Assigned to: </b>{task.assigned.name}</p>
        <p><b>Duration: </b>{String(task.duration)}</p>
        <p><b>Completed: </b>{String(task.completed)}</p>
      </div>
      <div>
        <Button onClick={deleteTask} color="danger">Delete</Button>
      </div>
    </CardBody>
  </Card>;
}
