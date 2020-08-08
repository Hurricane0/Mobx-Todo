import React from 'react';
import './index.css';
import todoState from './state/TodoState';

class App extends React.Component {
  render() {
    return <TodoList store={todoState} />;
  }
}

export default App;
