import { observable } from 'mobx';

class TodoState {
  @observable todos = [];
}

const todoState = new TodoState();
export default todoState;
