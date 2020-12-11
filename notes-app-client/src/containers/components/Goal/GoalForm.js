import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';

import { AppContext } from './../../../libs/contextLib';

export default function GoalForm(props) {
  const [goal, setGoal] = useState(props.goal || '');
  const [deadline, setDeadline] = useState(props.deadline || '');

  const context = useContext(AppContext);

  const resetForm = () => {
    setGoal('');
    setDeadline('');
  };

  const handleGoalCreation = async () => {
    if (goal && deadline) {
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.post('http://localhost:3005/api/v1/goals', {
          userId,
          goal,
          deadline,
        });

        context.dispatch({
          type: 'ADD-GOAL',
          goal: res.data.goal,
        });

        toast.success(res.data.message);

        resetForm();
      } catch (err) {
        if (err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Could not create goal');
        }
      }
    }
  };

  return (
    <main className='goal__card'>
      <section>
        <Form>
        <Form.Group controlId="Goal">
          <Form.Control
            value={goal}
            type='text'
            placeholder='Enter Goal'
            onChange={(event) => setGoal(event.target.value)}
          />
          </Form.Group>
{/*          <input
            value={deadline}
            type='text'
            placeholder='deadline'
            onChange={(event) => setDeadline(event.target.value)}
          />
          <DatePicker selected={deadline} placeholderText="Click to select a date" onChange={date => setDeadline(date)} />
          */}
          <Form.Group controlId="Deadline">
          <Form.Control
            value={deadline}
            type='date'
            placeholder='Enter Deadline'
            onChange={(event) => setDeadline(event.target.value)}
          />
          
          </Form.Group>
        </Form>
      </section>
      <section>
        <section>
          <Button
            variant='light'
            onClick={() => {
              handleGoalCreation();
            }}
          >
            Add
          </Button>
        </section>
      </section>
    </main>
  );
}
