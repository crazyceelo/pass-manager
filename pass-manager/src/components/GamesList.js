import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ applications }) {
  const emptyMessage = (
    <p>no games yet</p>
  );
  
  const gamesList = (
    <p>games list </p>
  );

  return (
    <div>
      {applications.length === 0 ? emptyMessage : gamesList}
    </div>
  )
}

GamesList.propTypes = {
  applications: PropTypes.array.isRequired
}