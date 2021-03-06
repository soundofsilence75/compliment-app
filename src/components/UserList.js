import React from 'react';
import PropTypes from 'prop-types';
import './styles/UserList.css';

const UserList = props => {
  const usersToDisplay = props.users.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <article className="user-list">
      <ul>
        {usersToDisplay}
      </ul>
    </article>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default UserList;
