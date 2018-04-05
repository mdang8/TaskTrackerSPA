import React from 'react';
import BoardTask from './boardTask';

export default function Board(params) {
  const boardTasks = _.map(params.tasks, (task) =>
    <BoardTask key={task.id} task={task} />
  );

  return (
    <div>
      {boardTasks}
    </div>
  );
}
