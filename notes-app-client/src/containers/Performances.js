import React, { Component, Fragment, useState, useRef, useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "./Performances.css"
import CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Todo({ todo, index, completeTodo, removeTodo, setScoreTodo }) {

  function handleSelect(event) {
     console.log("Honey", event.target.value)
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

        <select id="mySelect" onChange={handleSelect} value={todo.score}>
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
      text: "Eat Healthy",
      isCompleted: false,
      score: 0.5
    }
  ]);

  const [reports, setReports] = React.useState({
    animationEnabled: true,
    title: {
      text: "Total Scores"
    },
    axisY: {
      title: "Score"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "Flossing every night",
      showInLegend: true,
      dataPoints: [
        { y: 0.5, label: "1" }
        // { y: 0.5, label: "2" },
        // { y: 1, label: "3" },
        // { y: 0, label: "4" },
        // { y: 1, label: "5" },
        // { y: 0.5, label: "6" },
        // { y: 0.5, label: "7" },
        // { y: 1, label: "8" },
        // { y: 0, label: "9" },
        // { y: 1, label: "10" },
        // { y: 0.5, label: "11" },
        // { y: 1, label: "12" }
      ]
    },
    {
       type: "spline",
       name: "Eat Healthy",
       showInLegend: true,
       dataPoints: [
         { y: 1, label: "1" }
    //     { y: 1, label: "2" },
    //     { y: 0, label: "3" },
    //     { y: 0.5, label: "4" },
    //     { y: 1, label: "5" },
    //     { y: 0, label: "6" },
    //     { y: 0, label: "7" },
    //     { y: 1, label: "8" },
    //     { y: 0.5, label: "9" },
    //     { y: 0, label: "10" },
    //     { y: 0.5, label: "11" },
    //     { y: 0.5, label: "12" }
       ]
     }
    ]
  })

  const addNewCurve = text => {
    const updateData = [...reports.data, {type: "spline",
    name: text,
    showInLegend: true,
    dataPoints: []}]
    setReports({...reports,data: updateData})
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    addNewCurve(text);
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
    console.log(index,score);
    const newTodos = [...todos];
    newTodos[index].score = score;
    setTodos(newTodos);
    addReport(newTodos[index].text, score);
  };




  // }
  // {
  //   text: "Eat Healthy",
  //   score: 0.5
  // },
  // {
  //   text: "Eat Healthy",
  //   score: 1
  // },
  // {
  //   text: "Eat Healthy",
  //   score: 1
  // },
  // {
  //   text: "Eat Healthy",
  //   score: 0
  // }
  // ,
  // {
  //   text: "Flossing",
  //   score: 0.5
  // },
  // {
  //   text: "Flossing",
  //   score: 1
  // },
  // {
  //   text: "Read a book",
  //   score: 1

  // }
  // })

  const addReport = (text, score) => {
    // console.log("addReport",text,score);
    const updateData = reports.data.map(lineData => {
      if(lineData.name === text) {
        console.log("found",lineData.name);
        lineData.dataPoints.push({y:Number(score), label:lineData.dataPoints.length+1})
      }
      // console.log("This is lineData",lineData);
      return lineData;
    })
    const newReports = {...reports, data:updateData};
    // console.log(newReports);
    setReports(newReports);
  };

  const removeReport = (targetReportIndex, targetDataPointIndex) => {
    const reportsCopy = JSON.parse(JSON.stringify(reports));
    reportsCopy.data[targetReportIndex].dataPoints.splice(targetDataPointIndex, 1);
    
    console.log('reportsCopy=', reportsCopy)

    setReports(reportsCopy);
  };

  const canvasRef = useRef(null);
  // const dataPoints = reports.map((report, index) => ({ y: report.score - 0, indexLabel: report.text, x: index }))
  // console.log(dataPoints);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.render();
    }
  }, [reports])


  return (
    <Container>
      <Row>
        <Col style={{ width: "50%" }}>
          <h3 className="todo-list">To-do Items</h3>
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
          <h3 className="todo-list">Score Report</h3>
          {reports.data.map((report, index) => {
            const DataPoints = report.dataPoints.map((dataPoint, dataPointIndex) => {
              if(!dataPoint){
                return null;
              }
              return <React.Fragment>
              <div className="todo-list">
                <div
                  className="todo"
                  style={{ textDecoration: report.addReport ? "line-through" : "" }}
                >
                  <div>{report.name + " *** " + dataPoint.y}</div>
                  <button onClick={() => removeReport(index,dataPointIndex)}>x</button>
                </div>
              </div>
            </React.Fragment>

            })
            return DataPoints;
            // console.log("Report,index = ",report, index)
          })}

        </Col>
      </Row>
      <Row>
        <div className="edge">
          <CanvasJSChart options={reports}></CanvasJSChart>
        </div>
      </Row>
    </Container>
  );
}
export default Performances;