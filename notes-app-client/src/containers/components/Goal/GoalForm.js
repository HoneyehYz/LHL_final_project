import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

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
        <form autoComplete='off'>
          <input
            value={goal}
            type='text'
            placeholder='Enter Goal'
            onChange={(event) => setGoal(event.target.value)}
          />
          <input
            value={deadline}
            type='text'
            placeholder='deadline'
            onChange={(event) => setDeadline(event.target.value)}
          />
        </form>
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
