import React from 'react';
import classNames from 'classnames';
import { saveGame } from '../actions/saveGame';

// redux
import { connect } from 'react-redux';


class GameForm extends React.Component {
  state = {
    title: '',
    cover: '',
    errors: '',
    loading: false
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({
          [e.target.name]: e.target.value,
          errors
        });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (this.state.title === '') errors.title = "Can't be empty";
    if (this.state.cover === '') errors.cover = "Can't be emptry";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const { title, cover } = this.state;
      this.setState({
        loading: true
      })
      this.props.saveGame({
        title,
        cover
      });
    }
  }


  render() {
    return (
      <form className={classNames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
        <h1>Add New Game</h1>

        <div className={classNames('field', { error: !!this.state.errors.title})}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>

        <div className={classNames('field', { error: !!this.state.errors.cover})}>
          <label htmlFor="cover">Cover URL</label>
          <input
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            id="cover"
          />
          <span>{this.state.errors.cover}</span>
        </div>

        <div className="field">
          {
          this.state.cover !== '' &&
          <img src={this.state.cover} alt="cover" className="ui small bordered image" />
          }   
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>

      </form>
    )
  }
}

// null because you do not need to get data from
// global app state
// object of actions {saveGame}
export default connect(null, {saveGame})(GameForm);