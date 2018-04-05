import React from 'react';
import Task from './task';

export default function ListTasks(params) {
  const tasks = _.map(params.tasks, (task) =>
    <Task key={task.id} task={task} token={params.token} />
  );

  return (
    <div style={{ padding: "4ex" }}>
      <h2>Tasks</h2>
      {tasks}
    </div>
  );
}
