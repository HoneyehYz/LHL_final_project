import React, {Component, useState} from 'react'
import {Col, Container, Form, Row} from 'react-bootstrap'
import "./Performances.css"



const items = [
  {
    item_id : 1,
    item : "flossing",
    user_id: 1,
    score_id: 1,

  }
];

function Todo({ todo, index, completeTodo, removeTodo, setScoreTodo}) {

  function myFunction(event){
    //console.log("Honey", event.target.value)
    setScoreTodo(index,event.target.value)
  }

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
  
        <select id="mySelect" onChange={myFunction} value={todo.score}>
          <option value="0">0</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
}


// function myScore(){
//   let value = document.getElementById("mySelect").value;
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
      text: "Flossing every night",
      isCompleted: false,
      score: 0
    },
    {
      text: "Eat healthy",
      isCompleted: false,
      score: 0.5
    },
    {
      text: "Read a book",
      isCompleted: false,
      score: 1
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

  const setScoreTodo = (index,score) => {
    const newTodos = [...todos];
    newTodos[index].score = score;
    setTodos(newTodos);
    addReport(newTodos[index].text,score);
  };

  const[reports, setReports] = React.useState([
    {
      text: "Hello",
      score: 1
    }
  ])

  const addReport = (text,score) => {
    const newReports = [...reports, { text,score }];
    setReports(newReports);
  };

  const removeReport = (text,score) => {
    const newReports = [...reports, {text,score}];
    newReports.splice(text,score, 1);
    setTodos(newReports);
  };



  return (
    <Container>
      <Row>
      <Col style={{width:"50%"}}>
      <div className="app">
      <div className="todo-list">
      <h3>Performance Item</h3>
        {todos.map((todo, index) => (
          
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            setScoreTodo={setScoreTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        
      </div>
    </div>
      </Col>
      <Col>
      {reports.map((report, index) => (

        report.text + report.score 

      ))}
      <button onClick={(report) => removeReport(report.text,report.score)}>x</button>
      </Col>
      </Row>
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