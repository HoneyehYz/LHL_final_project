import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Performances.css";
import CanvasJSReact from "./canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const axios = require("axios").default;

function Task({ task, index, completeTask, removeTask, setScoreTask }) {
  function handleSelect(event) {
    setScoreTask(index, event.target.value);
  }
  
  return (
    <div
      className="todo"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>x</button>
        <select id="mySelect" onChange={handleSelect} value={task.score}>
          <option value="0">0</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
}


function TaskForm({ addTask }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
function Performances() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3005/api/v1/task?userId=${localStorage.getItem(
          "userId"
        )}`
      )
      .then((response) => {
        setTasks(response.data.tasks);
      });
  }, []);

  for (let i = 0; i < tasks.length; i++) {
    console.log("All the tasks name", tasks[i].task);
  }

  const [reports, setReports] = React.useState({
    animationEnabled: true,
    title: {
      text: "Total Scores",
    },
    axisY: {
      title: "Score",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "Flossing every night",
        showInLegend: true,
        dataPoints: [{ y: 0.5, label: "1" }],
      },
      {
        type: "spline",
        name: "Eat Healthy",
        showInLegend: true,
        dataPoints: [{ y: 1, label: "1" }],
      },
    ],
  });
  const addNewCurve = (text) => {
    const updateData = [
      ...reports.data,
      { type: "spline", name: text, showInLegend: true, dataPoints: [] },
    ];
    setReports({ ...reports, data: updateData });
  };
  const addTask = (text) => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
    addNewCurve(text);
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const setScoreTask = (index, score) => {
    console.log(index, score);
    const newTasks = [...tasks];
    newTasks[index].score = score;
    setTasks(newTasks);
    addReport(newTasks[index].text, score);
  };
  const addReport = (text, score) => {
    // console.log("addReport",text,score);
    const updateData = reports.data.map((lineData) => {
      if (lineData.name === text) {
        console.log("found", lineData.name);
        lineData.dataPoints.push({
          y: Number(score),
          label: lineData.dataPoints.length + 1,
        });
      }
      // console.log("This is lineData",lineData);
      return lineData;
    });
    const newReports = { ...reports, data: updateData };
    // console.log(newReports);
    setReports(newReports);
  };
  const removeReport = (targetReportIndex, targetDataPointIndex) => {
    const reportsCopy = JSON.parse(JSON.stringify(reports));
    reportsCopy.data[targetReportIndex].dataPoints.splice(
      targetDataPointIndex,
      1
    );
    console.log("reportsCopy=", reportsCopy);
    setReports(reportsCopy);
  };
  const canvasRef = useRef(null);
  // const dataPoints = reports.map((report, index) => ({ y: report.score - 0, indexLabel: report.text, x: index }))
  // console.log(dataPoints);
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.render();
    }
  }, [reports]);


  return (
    <Container>
      <Row>
        <Col style={{ width: "50%" }}>
          <h5 className="todo-list">To-do Items</h5>
          <div className="app">
            <div className="todo-list">
              {tasks.map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  task={task.task}
                  completeTask={completeTask}
                  setScoreTask={setScoreTask}
                  removeTask={removeTask}
                />
              ))}
              <TaskForm addTask={addTask} />
            </div>
          </div>
        </Col>
        <Col>
          <h5 className="todo-list">Score Report</h5>
          {reports.data.map((report, index) => {
            const DataPoints = report.dataPoints.map(
              (dataPoint, dataPointIndex) => {
                if (!dataPoint) {
                  return null;
                }
                return (
                  <React.Fragment>
                    <div className="todo-list">
                      <div
                        className="todo"
                        style={{
                          textDecoration: report.addReport
                            ? "line-through"
                            : "",
                        }}
                      >
                        <div>{report.name + " *** " + dataPoint.y}</div>
                        <button
                          onClick={() => removeReport(index, dataPointIndex)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            );
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
