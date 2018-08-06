import React from 'react';
import PropTypes from 'prop-types';

// react redux
import { connect } from 'react-redux';

// component
import GamesList from './GamesList';

// actions
import {fetchGames} from '../actions/fetchGames';

class GamesPage extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List </h1>

        <GamesList games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.object.isRequired,
  fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, {fetchGames})(GamesPage);