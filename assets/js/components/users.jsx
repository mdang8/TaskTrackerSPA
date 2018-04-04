import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return <p>{params.user.name} - <Link to={'/users/' + params.user.id}>tasks</Link></p>;
}

export default function Users(params) {
  let users = _.map(params.users, (uu) =>
    <li className="list-group-item" key={uu.id}><User key={uu.id} user={uu} /></li>
  );

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users}
      </ul>
    </div>
  );
}
