import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import './GoalListItem.css';
import { AppContext } from '../../../libs/contextLib';

export default function GoalListItem(props) {
  const context = useContext(AppContext);

  const handleGoalDeletion = async (goalId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3005/api/v1/goal/${goalId}?userId=${localStorage.getItem(
          'userId'
        )}`
      );

      context.dispatch({
        type: 'REMOVE-GOAL',
        goalId,
      });

      toast.success(res.data.message);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Could not delete the goal');
      }
    }
  };

  return (
    <li className='goal__card' key={props.id}>
      <h2
        className='text--regular'
        value={props.goal}
        style={{ cursor: 'pointer' }}
        onClick={() => props.setGoalSelector(props.id)}
      >
        {props.goal}
      </h2>
      <section>
        <h4>Deadline: {props.deadline}</h4>
      </section>

      <section>
        <section style={{ cursor: 'pointer' }}>
          <img
            className='goal-button'
            src='/trash.png'
            alt='Delete'
            onClick={() => {
              handleGoalDeletion(props.id);
            }}
          />
        </section>
      </section>
    </li>
  );
}
