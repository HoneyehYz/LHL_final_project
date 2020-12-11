import React, { useRef, useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form'

import './Performances.css';
import { AppContext } from '../libs/contextLib';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Task = ({ taskId, completed, task }) => {
  const context = useContext(AppContext);
  const [score, setScore] = useState(null);

  const handleSelect = (event) => {
    setScore(event.target.value);
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

  const handleTaskCompletion = async (taskId, score) => {
    if (taskId && score) {
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.patch(
          `http://localhost:3005/api/v1/task/${taskId}?userId=${localStorage.getItem(
            'userId'
          )}`,
          {
            userId,
            score: parseFloat(score),
            completed: true,
            score_date: new Date(),
          }
        );

        context.dispatch({
          type: 'COMPLETE-TASK',
          task: res.data.task,
        });

        toast.success(res.data.message);
      } catch (err) {
        if (err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Could not complete the task');
        }
      }
    } else {
      toast.warn('Select the score first');
    }
  };

  return (
    <div
      className='todo'
      style={{ textDecoration: completed ? 'line-through' : '' }}
    >
      {task}
      <div>
        {!completed ? (
          <button onClick={() => handleTaskCompletion(taskId, score)}>
            Complete
          </button>
        ) : null}
        <button onClick={() => handleTaskDeletion(taskId)}>x</button>
        {!completed ? (
          <select id='mySelect' onChange={handleSelect}>
            <option value='0'>0</option>
            <option value='0.2'>0.2</option>
            <option value='0.4'>0.4</option>
            <option value='0.6'>0.6</option>
            <option value='0.8'>0.8</option>
            <option value='1'>1</option>
          </select>
        ) : null}
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
  /*   <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
   */
   <Form onSubmit={handleSubmit}>
  <Form.Group controlId="item">
  <Form.Control type="text" value={value}
    onChange={(e) => setValue(e.target.value)}/>
  </Form.Group>
   </Form>  
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

        res.data.tasks.map((task) => {
          if (task.completed) {
            context.dispatch({
              type: 'SET-REPORTS',
              report: {
                taskId: task.id,
                name: task.task,
                showInLegend: true,
                dataPoints: [{ y: task.score, label: '1' }],
              },
            });
          }
        });
      });
  }, []);

  const addNewCurve = (task) => {
    // const updateData = [
    //   ...reports.data,
    //   { type: 'spline', name: task, showInLegend: true, dataPoints: [] },
    // ];
    // setReports({ ...reports, data: updateData });
  };

  return (
    <Container>
      <Row>
        <Col style={{ width: '50%' }}>
          <h5 className='todo-list'>To-do Items</h5>
          <div className='app'>
            <div className='todo-list'>
              {context.state.tasks.map((task, index) => (
                <Task
                  task={task.task}
                  taskId={task.id}
                  completed={task.completed}
                />
              ))}
              <TaskForm />
            </div>
          </div>
        </Col>
        <Col>
          <h5 className='todo-list'>Score Report</h5>

          {context.state.reports.data.map((report, index) => {
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
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            );

            return DataPoints;
          })}
        </Col>
      </Row>
      <Row>
        <div className='edge'>
          <CanvasJSChart options={context.state.reports}></CanvasJSChart>
        </div>
      </Row>
    </Container>
  );
};
export default Performances;
