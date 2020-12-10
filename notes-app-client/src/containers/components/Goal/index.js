import React from 'react';

import GoalForm from './GoalForm';
import GoalList from './GoalList';

export default function Goal(props) {
  return (
    <div className='goal'>
      <section className='goal-list'>
        <GoalForm />
        <GoalList
          goals={props.goals}
          onChange={props.setGoalSelector}
        />
      </section>
    </div>
  );
}
