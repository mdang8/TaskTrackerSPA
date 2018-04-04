import React from 'react';
import Task from './task';

export default function Board(params) {
  let tasks = _.map(params.tasks, (task) =>
    <Task key={task.id} task={task} />
  );

  return (
    <div>
      {tasks}
    </div>
  );
}
