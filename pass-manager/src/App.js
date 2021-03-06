import React, { Component } from 'react';
// import logo from './logo.svg'; // this came with create-react-app. I removed this template html
import './App.css';

// react router
import { Route, NavLink } from 'react-router-dom';

// components
import GamesPage from './components/GamesPage';
import GameForm from './components/GameForm';

// Custom function to make an active link appear as active.
// label, to, activeOnlyWhenExact are props we provide when using this
// const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
//   // when route matches we want to render link with class active'
//   // children prop. takes function that renders if path matches or not. 
//   // match allows us to create our own logic
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//     <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
//   )} />
// );

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink className="item" exact={true} activeClassName="active" to="/">Home</NavLink>
          <NavLink className="item" exact={true} activeClassName="active" to="/games">Games</NavLink>
          <NavLink className="item" exact={true} activeClassName="active" to="/games/new" >Add New Game</NavLink>


          {/* <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/games" label="Games" />
          <ActiveLink activeOnlyWhenExact to="/games/new" label="Add New Game" /> */}


          {/* <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/games/new">Add New Game</Link> */}
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/new" component={GameForm} />

      </div>
    );
  }
}

export default App;
