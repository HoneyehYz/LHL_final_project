import React, { useState } from 'react'
import GoalForm from './GoalForm';
import GoalList from './GoalList';


export default function Goal(props){
  const [goals, setGoals] = useState(props.goals);

  function save(goal, deadline){
    if((!goal)||(!deadline)){
      return;
    }
    const newGoal = {
      goal,
      deadline,
      "id": Math.floor(Math.random()*1000),
      "user_id": localStorage.getItem("userId")
    }; 
    const newGoals = [...goals, newGoal];
    setGoals(newGoals);
  }

  const removeGoal = (index) => {
  //  console.log("goalRemoval", index);
    const updatedGoals = [...goals];
    updatedGoals.splice(index,1);
    setGoals(updatedGoals); 
  //  console.log("removalGoal",updatedGoals);
  }

  return (
    <div className="goal">
      <section className="goal-list">
      <GoalForm onSave={save} />
      <GoalList goals={goals} value={props.value} onChange={props.setGoalSelector} cancelGoal={removeGoal}/>
      </section>
    </div>
  );
        }