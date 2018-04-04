import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;

  return <Card>
    <CardBody>
      <div>
        <p><i>Created by <b>{task.user.name}</b></i></p>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    </CardBody>
  </Card>;
}
