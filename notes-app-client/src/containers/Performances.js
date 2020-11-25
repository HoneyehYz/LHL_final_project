import React, {Component} from 'react'
import {Col, Container, Form} from 'react-bootstrap'
import "./Performances.css"



function Todo({ todo, index, completeTodo, removeTodo }) {

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
        <select id="mySelect" onchange="myFunction()">
          <option value="0">0</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
}

// function test(){
//   document.getElementById("mySelect").value
// }
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Performances() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Col>
      <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        
      </div>
    </div>
      </Col>
    </Container>
  );
}
// class Performances extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { inputs: ['input-0'] };
//   }

//   render() {
//       return(
//           <div>
//              <Form>
//                  <div id="dynamicInput">
//                      {this.state.inputs.map(input => <input key={input} />)}
//                  </div>
//              </Form>
//              <button onClick={ () => this.appendInput() }>
//                  CLICK ME TO ADD AN INPUT
//              </button>
//           </div>
//       );
//   }

//   appendInput() {
//       var newInput = `input-${this.state.inputs.length}`;
//       this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
//   }
// }

export default Performances;