import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import todoState from './state/TodoState';
import TodoList from './components/TodoList/TodoList';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

@observer
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <TodoList store={todoState} />
      </Wrapper>
    );
  }
}

export default App;
