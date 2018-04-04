import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import TaskForm from './taskForm';
import Board from './board';
import Users from './users';

export default function taskTracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TaskTracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

let TaskTracker = connect((state) => state)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() =>
          <div>
            <TaskForm />
            <Board tasks={props.tasks} />
          </div>
        } />
        <Route path="/users" exact={true} render={() =>
          <Users users={props.users} />
        } />
        <Route path="/users/:user_id" render={({match}) =>
          <Board tasks={_.filter(props.tasks, (task) => {
            return match.params.user_id == task.user.id;
          })
          } />
        } />
      </div>
    </Router>
  );
});

// class TaskTracker extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: [],
//       users: [],
//     };

//     this.requestTasks();
//     this.requestUsers();
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav />
//           <Route path="/" exact={true} render={() =>
//             <div>
//               <TaskForm />
//               <Board tasks={props.tasks} />
//             </div>
//           } />
//           <Route path="/users" exact={true} render={() =>
//             <Users users={props.users} />
//           } />
//           <Route path="/users/:user_id" render={({ match }) =>
//             <Board tasks={_filter(props.tasks, (task) =>
//               match.params.user_id == task.user_id)
//             } />
//           } />
//         </div>
//       </Router>
//     );
//   }
// }
