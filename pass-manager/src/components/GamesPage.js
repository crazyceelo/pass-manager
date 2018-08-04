import React from 'react';
import PropTypes from 'prop-types';

// react redux
import { connect } from 'react-redux';

// component
import GamesList from './GamesList';

class GamesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Games List </h1>

        <GamesList applications={this.props.applications} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  applications: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    applications: state.applications
  }
}

export default connect(mapStateToProps)(GamesPage);