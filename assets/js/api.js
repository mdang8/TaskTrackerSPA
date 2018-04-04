import store from './store';

class Server {
  requestTasks() {
    $.ajax('/api/v1/tasks', {
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      success: (res) => {
        store.dispatch({
          type: 'TASKS_LIST',
          tasks: res.data,
        });
      },
    });
  }

  requestUsers() {
    $.ajax('/api/v1/users', {
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      success: (res) => {
        store.dispatch({
          type: 'USERS_LIST',
          users: res.data,
        });
      },
    });
  }

  submitTask(data) {
    $.ajax('/api/v1/tasks', {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify({ task: data }),
      success: (res) => {
        store.dispatch({
          type: 'ADD_TASK',
          task: res.data,
        });
      },
    });
  }
}

export default new Server();
