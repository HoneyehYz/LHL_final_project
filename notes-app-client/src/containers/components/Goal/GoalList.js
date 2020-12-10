import React from 'react';

import GoalListItem from './GoalListItem';
import './style.css';

export default function GoalList(props) {
  const goalList = props.goals.map((goal) => {
    return (
      <ul className='goalList'>
        <GoalListItem
          key={goal.id}
          id={goal.id}
          goal={goal.goal}
          deadline={goal.deadline}
          selected={goal.id === props.value}
          setGoalSelector={(event) => props.onChange(goal.id)}
        />
      </ul>
    );
  });

  return <section>{goalList}</section>;
}
//id={goal.id}
