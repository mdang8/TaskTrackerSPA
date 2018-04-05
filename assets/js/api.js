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
      data: JSON.stringify({
        task: data,
        token: data.token,
      }),
      success: (res) => {
        store.dispatch({
          type: 'ADD_TASK',
          task: res.data,
        });
      },
      error: (res) => {
        store.dispatch({
          type: 'CREATE_TASK_ERROR',
          errorMsg: res.responseText,
        });
      }
    });
  }

  deleteTask(data) {
    $.ajax('/api/v1/tasks/' + data.id, {
      method: 'DELETE',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      success: (res) => {
        this.requestTasks();
      },
      error: (res) => {
        store.dispatch({
          type: 'DELETE_TASK_ERROR',
          errorMsg: res.responseText,
        });
      }
    });
  }

  submitLogin(data) {
    $.ajax('/api/v1/token', {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(data),
      success: (res) => {
        store.dispatch({
          type: 'SET_TOKEN',
          token: res,
        });
      },
      error: (res) => {
        store.dispatch({
          type: 'LOGIN_ERROR',
          errorMsg: res.responseText,
        });
      }
    });
  }

  registerUser(data) {
    $.ajax('/api/v1/users', {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify({
        user: data,
      }),
      success: (res) => {
        store.dispatch({
          type: 'REGISTER_USER',
          users: this.requestUsers(),
        });
      },
      error: (res) => {
        store.dispatch({
          type: 'REGISTER_ERROR',
          errorMsg: res.responseText,
        });
      }
    });
  }
}

export default new Server();
