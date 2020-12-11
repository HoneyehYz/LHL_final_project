import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import './style.css';
import { AppContext } from '../../../libs/contextLib';

export default function MilestoneListItem(props) {
  const context = useContext(AppContext);

  const handleMilestoneDeletion = async (milestoneId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3005/api/v1/milestone/${milestoneId}?userId=${localStorage.getItem(
          'userId'
        )}`
      );

      context.dispatch({
        type: 'REMOVE-MILESTONE',
        milestoneId,
      });

      toast.success(res.data.message);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Could not delete the milestone');
      }
    }
  };

  const handleMilestoneCompletion = async (milestoneId, completed) => {
    if (completed) {
      return toast.warn('Milestone is already completed');
    }

    try {
      const res = await axios.patch(
        `http://localhost:3005/api/v1/milestone/${milestoneId}?userId=${localStorage.getItem(
          'userId'
        )}`,
        { completed: true, completedAt: new Date() }
      );

      context.dispatch({
        type: 'COMPLETE-MILESTONE',
        milestone: res.data.milestone,
      });

      toast.success(res.data.message);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Could not complete the milestone');
      }
    }
  };

  return (
    <li className='milestone__card' key={props.id}>
      <div style={{ textDecoration: props.completed ? 'line-through' : '' }}>
        <h4>{props.milestone}</h4>
        <section>
          <h5>Deadline: {props.deadline}</h5>
        </section>
      </div>
      <section>
        <img
          className='milestone-button'
          src='/done.png'
          alt='Done'
          onClick={() => {
            handleMilestoneCompletion(props.id, props.completed);
          }}
          style={{ marginRight: '30px', cursor: 'pointer' }}
        />
        <img
          className='milestone-button'
          src='/trash.png'
          alt='Delete'
          onClick={() => {
            handleMilestoneDeletion(props.id);
          }}
          style={{ cursor: 'pointer' }}
        />
      </section>
    </li>
  );
}
