import React, {Component, Fragment, useState,useRef,useEffect} from 'react'
import {Col, Container, Form, Row} from 'react-bootstrap'
import "./Performances.css"
import CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


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
      text: "Eat Healthy",
      score: 1
    },
    {
      text: "Eat Healthy",
      score: 0.5
    },
    {
      text: "Eat Healthy",
      score: 1
    },
    {
      text: "Flossing",
      score: 0.5
    },
    {
      text: "Flossing",
      score: 1
    },
    {
      text: "Read a book",
      score: 1

    }
  ])

  const addReport = (text,score) => {
    const newReports = [...reports, { text,score }];
    setReports(newReports);
  };

  const removeReport = (index) => {
    const newReports = [...reports];
    newReports.splice(index, 1);
    console.log(newReports);
    setReports(newReports);
  };
  const canvasRef = useRef(null);

  const dataPoints = reports.map((report,index) => ({ y:report.score-0, indexLabel:report.text, x:index}))
  console.log(dataPoints);
  useEffect(() => {if(canvasRef.current) {
    canvasRef.current.render();
  }}, [reports])


  return (
    <Container>
      <Row>
      <Col style={{width:"50%"}}>
      <h3  className="todo-list">To-do Items</h3>
      <div className="app">
      <div className="todo-list">
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
      <h3  className="todo-list">Score Report</h3>
      {reports.map((report, index) => {
        return <React.Fragment>
          <div  className="todo-list">
          <div
          className="todo"
          style={{ textDecoration: report.addReport ? "line-through" : "" }}
           >
          <div>{report.text + "      " + report.score}</div> 
          <button onClick={() => removeReport(index)}>x</button>
          </div>
          </div>
       </React.Fragment>
    
        })}
      
       </Col>
     </Row>
     <Row>

       <CanvasJSChart options={{data:[{type:"spline",dataPoints}]}} onRef={(e) => canvasRef.current=e}></CanvasJSChart>

     </Row>
    </Container>
  );
}
export default Performances;