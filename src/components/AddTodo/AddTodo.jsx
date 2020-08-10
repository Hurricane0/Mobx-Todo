import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  width: -webkit-fill-available;
  display: block;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 8px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(new Date(), this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          type="text"
          placeholder="Add Todo..."
        />
      </form>
    );
  }
}
