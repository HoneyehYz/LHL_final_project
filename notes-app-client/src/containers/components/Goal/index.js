import React, { useState } from 'react'
import GoalForm from './GoalForm';
import GoalList from './GoalList';

export default function Goal(props){
  const [goals, setGoals] = useState(props.goals);
  console.log(props);
  
  const [goalSelector, setGoalSelector] = useState("");

  function save(goal, deadline){
    const newGoal = {
      goal,
      deadline
    }; 
    const newGoals = [...goals, newGoal];
    setGoals(newGoals);
  }

  const removeGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  }

  return (
    <div className="goal">
      <div className="goal-list">
      <GoalForm onSave={save} />
      <GoalList goals={goals} goal={""} onChange={(goal)=>setGoalSelector(goal)} editGoal={save} cancelGoal={removeGoal} milestones={props.milestones}/>
      </div>
    </div>
  );
        }