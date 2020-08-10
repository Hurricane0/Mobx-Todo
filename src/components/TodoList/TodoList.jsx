import React, { Component } from 'react';
import { toJS } from 'mobx';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';

const Wrapper = styled.div`
  max-width: 600px;
  width: 600px;
  padding: 30px;
  border: 1px dashed #eee;
  border-radius: 8px;
  margin-top: 100px;
`;
@observer
class TodoList extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { todos } = toJS(this.props.store);
    // eslint-disable-next-line react/destructuring-assignment
    const { toggleCompleted } = this.props.store;

    return (
      <Wrapper>
        <AddTodo />
        {todos.map(({ id, title, completed }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </Wrapper>
    );
  }
}

export default TodoList;
