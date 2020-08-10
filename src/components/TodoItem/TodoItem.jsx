import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 8px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  display: flex;
  font-size: 16px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const Checkbox = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
`;
@observer
class TodoItem extends Component {
  render() {
    const { id, title, completed, completeTodo, removeTodo } = this.props;

    return (
      <Wrapper>
        <Title completed={completed}>{title}</Title>

        <div>
          {completed ? (
            <span onClick={() => removeTodo(id)}>
              <i className="fa fa-window-close" aria-hidden="true" />
            </span>
          ) : (
            <Checkbox onClick={() => completeTodo(id)} />
          )}
        </div>
      </Wrapper>
    );
  }
}

export default TodoItem;
