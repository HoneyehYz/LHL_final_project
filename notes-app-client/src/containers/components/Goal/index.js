import React, { useState } from 'react';
import axios from 'axios';

import GoalForm from './GoalForm';
import GoalList from './GoalList';

export default function Goal(props) {
  const [goals, setGoals] = useState([]);

  function save(goal, deadline, userId) {
    if (!goal || !deadline) {
      return;
    }

    const newGoal = {
      goal,
      deadline,
      userId,
    };

    return axios
      .post(
        `http://localhost:3005/api/v1/goals?userId=${localStorage.getItem(
          'userId'
        )}`,
        newGoal
      )
      .then((res) => {
        const resObj = res.data.goal;
        console.log(resObj);
        const newGoals = [...goals, resObj];
        setGoals(newGoals);
      });
  }

  return (
    <div className='goal'>
      <section className='goal-list'>
        <GoalForm onSave={save} />
        <GoalList
          goals={props.goals}
          value={props.value}
          onChange={props.setGoalSelector}
        />
      </section>
    </div>
  );
}
