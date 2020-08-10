import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.addTodo(new Date(), this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
          />
        </form>
      </div>
    );
  }
}
