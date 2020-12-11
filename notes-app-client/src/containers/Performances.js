import React, { useRef, useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './Performances.css';

import { AppContext } from '../libs/contextLib';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Task = ({ taskId, task, index, completeTask, setScoreTask }) => {
  const context = useContext(AppContext);

  const handleSelect = (event) => {
    setScoreTask(index, event.target.value);
  };

  const handleTaskDeletion = async (taskId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3005/api/v1/task/${taskId}?userId=${localStorage.getItem(
          'userId'
        )}`
      );

      context.dispatch({
        type: 'REMOVE-TASK',
        taskId,
      });

      toast.success(res.data.message);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Could not delete the task');
      }
    }
  };

  return (
    <div
      className='todo'
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => handleTaskDeletion(taskId)}>x</button>
        <select id='mySelect' onChange={handleSelect} value={task.score}>
          <option value='0'>0</option>
          <option value='0.5'>0.5</option>
          <option value='1'>1</option>
        </select>
      </div>
    </div>
  );
};

const TaskForm = () => {
  const [value, setValue] = useState('');
  const context = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value) {
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.post('http://localhost:3005/api/v1/task', {
          userId,
          task: value,
        });

        context.dispatch({
          type: 'ADD-TASK',
          task: res.data.task,
        });

        toast.success(res.data.message);

        setValue('');
      } catch (err) {
        if (err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Could not add task');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

const Performances = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3005/api/v1/task?userId=${localStorage.getItem(
          'userId'
        )}`
      )
      .then((res) => {
        context.dispatch({
          type: 'SET-TASKS',
          tasks: res.data.tasks,
        });
      });
  }, []);

  const [reports, setReports] = React.useState({
    animationEnabled: true,
    title: {
      text: 'Total Scores',
    },
    axisY: {
      title: 'Score',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'spline',
        name: 'Flossing',
        showInLegend: true,
        dataPoints: [{ y: 0.5, label: '1' }],
      },
      {
        type: 'spline',
        name: 'Watch one episode of Friends',
        showInLegend: true,
        dataPoints: [{ y: 1, label: '1' }],
      },
    ],
  });

  const addNewCurve = (task) => {
    const updateData = [
      ...reports.data,
      { type: 'spline', name: task, showInLegend: true, dataPoints: [] },
    ];
    setReports({ ...reports, data: updateData });
  };

  const completeTask = (index) => {
    // const newTasks = [...tasks];
    // newTasks[index].completed = true;
    // setTasks(newTasks);
  };

  const removeTask = (index) => {
    // const newTasks = [...tasks];
    // newTasks.splice(index, 1);
    // setTasks(newTasks);
    // const res = axios.delete('http://localhost:3005/api/v1/task', { index });
    // return res;
    // return axios.delete(`http://localhost:3005/api/v1/task?userId=${localStorage.getItem(
    //   "userId"
    // )}`, newTasks)
  };

  const setScoreTask = (index, score) => {
    // console.log(index, score);
    // const newTasks = [...tasks];
    // newTasks[index].score = score;
    // setTasks(newTasks);
    // addReport(newTasks[index].task, score);
  };

  const addReport = (task, score) => {
    // console.log("addReport",text,score);
    // const updateData = reports.data.map((lineData) => {
    //   if (lineData.name === task) {
    //     console.log('found', lineData.name);
    //     lineData.dataPoints.push({
    //       y: Number(score),
    //       label: lineData.dataPoints.length + 1,
    //     });
    //   }
    //   // console.log("This is lineData",lineData);
    //   return lineData;
    // });
    // const newReports = { ...reports, data: updateData };
    // // console.log(newReports);
    // setReports(newReports);
  };

  const removeReport = (targetReportIndex, targetDataPointIndex) => {
    // const reportsCopy = JSON.parse(JSON.stringify(reports));
    // reportsCopy.data[targetReportIndex].dataPoints.splice(
    //   targetDataPointIndex,
    //   1
    // );
    // console.log('reportsCopy=', reportsCopy);
    // setReports(reportsCopy);
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
        <Col style={{ width: '50%' }}>
          <h5 className='todo-list'>To-do Items</h5>
          <div className='app'>
            <div className='todo-list'>
              {context.state.tasks.map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  task={task.task}
                  taskId={task.id}
                  completeTask={completeTask}
                  setScoreTask={setScoreTask}
                />
              ))}
              <TaskForm />
            </div>
          </div>
        </Col>
        <Col>
          <h5 className='todo-list'>Score Report</h5>
          {reports.data.map((report, index) => {
            const DataPoints = report.dataPoints.map(
              (dataPoint, dataPointIndex) => {
                if (!dataPoint) {
                  return null;
                }
                return (
                  <React.Fragment>
                    <div className='todo-list'>
                      <div
                        className='todo'
                        style={{
                          textDecoration: report.addReport
                            ? 'line-through'
                            : '',
                        }}
                      >
                        <div>{report.name + ' *** ' + dataPoint.y}</div>
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
        <div className='edge'>
          <CanvasJSChart options={reports}></CanvasJSChart>
        </div>
      </Row>
    </Container>
  );
};
export default Performances;
