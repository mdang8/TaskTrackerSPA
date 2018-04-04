import React from 'react';
import Task from './task';

export default function Board(params) {
  let tasks = _.map(params.tasks, (t) => <Task key={t.id} task={t} />);

  return (
    <div>
      {tasks}
    </div>
  );
}
