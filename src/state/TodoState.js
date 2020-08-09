import { observable, computed, action } from 'mobx';

class TodoState {
  @observable todos = [{ id: 1, title: 'Test Todo', completed: false }];

  @computed get info() {
    return this.todos;
  }

  @action addTodo(id, title) {
    this.todos.push({ id, title, completed: false });
  }

  @action removeTodo(id) {
    this.todos.filter((todo) => todo.id !== id);
  }

  @action completeTodo(id) {
    this.todos.find((todo) => todo.id === id).completed = true;
  }
}

const todoState = new TodoState();
export default todoState;
