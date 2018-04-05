import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return (
    <p>{params.user.name} --- <Link to={"/users/" + params.user.id}>View assigned tasks</Link></p>
  );
}

export default function Users(params) {
  let users = _.map(params.users, (user) =>
    <li className="list-group-item" key={user.id}><User key={user.id} user={user} /></li>
  );

  return (
    <div style={{ padding: "4ex" }}>
      <h2>Users</h2>
      <ul className="list-group">
        {users}
      </ul>
    </div>
  );
}
