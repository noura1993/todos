import React from 'react';
import './App.css';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoList from '../TodoList/TodoList';
import TodoIdGenerator from '../../util/TodoIdGenerator'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  addTodo(text) {
    let todo= this.state.todoList;

    let newTodo = {
      checkBox: false,
      todoText: text,
      id: TodoIdGenerator.getNewId()
    }
      todo.push(newTodo);
      this.setState({todoList: todo})
  }

  deleteTodo(id) {
    let todos = this.state.todoList;
    console.log(todos);
    todos = todos.filter( currentTodo => currentTodo.id !== id);

    this.setState({ todoList: todos});
  }

  render() {
    return (
      <div>
        <h1>My<span className="highlight">Todo</span>List</h1>
        <div className="App">
          <CreateTodo onAdd={this.addTodo} />
        <div className='App-todos'>
          <TodoList todoList={this.state.todoList} onDelete={this.deleteTodo} />
        </div>
      </div>
      </div>
    )
  }
}

export default App;
