import React, { Component, Fragment, useState, useRef, useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "./Performances.css"
import CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Todo({ todo, index, completeTodo, removeTodo, setScoreTodo }) {

  function myFunction(event) {
    //console.log("Honey", event.target.value)
    setScoreTodo(index, event.target.value)
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
  const [reports, setReports] = React.useState({
    animationEnabled: true,
    title: {
      text: "Performances"
    },
    axisY: {
      title: "Score"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "Eating Healthy",
      showInLegend: true,
      dataPoints: [
        { y: 1, label: "1" },
        { y: 0.5, label: "2" },
        { y: 1, label: "3" },
        { y: 0, label: "4" },
        { y: 1, label: "5" },
        { y: 0.5, label: "6" },
        { y: 0.5, label: "7" },
        { y: 1, label: "8" },
        { y: 0, label: "9" },
        { y: 1, label: "10" },
        { y: 0.5, label: "11" },
        { y: 1, label: "12" }
      ]
    },
    {
      type: "spline",
      name: "Flossing",
      showInLegend: true,
      dataPoints: [
        { y: 1, label: "1" },
        { y: 1, label: "2" },
        { y: 0, label: "3" },
        { y: 0.5, label: "4" },
        { y: 1, label: "5" },
        { y: 0, label: "6" },
        { y: 0, label: "7" },
        { y: 1, label: "8" },
        { y: 0.5, label: "9" },
        { y: 0, label: "10" },
        { y: 0.5, label: "11" },
        { y: 0.5, label: "12" }
      ]
    },
    {
      type: "spline",
      name: "Read a book",
      showInLegend: true,
      dataPoints: [
        { y: 0.5, label: "1" },
        { y: 0, label: "2" },
        { y: 0, label: "3" },
        { y: 1, label: "4" },
        { y: 1, label: "5" },
        { y: 1, label: "6" },
        { y: 0.5, label: "7" },
        { y: 1, label: "8" },
        { y: 0, label: "9" },
        { y: 0.5, label: "10" },
        { y: 1, label: "11" },
        { y: 0, label: "12" }
      ]
    }
    ]
  })


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

  const setScoreTodo = (index, score) => {
    const newTodos = [...todos];
    newTodos[index].score = score;
    setTodos(newTodos);
    // addReport(newTodos[index].text, score);
  };

  return (

    <CanvasJSChart options={reports} ></CanvasJSChart>

  );

}
export default Performances;