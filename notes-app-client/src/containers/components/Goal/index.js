import React, { useState } from 'react'
import GoalForm from './GoalForm';
import GoalList from './GoalList';

const axios = require('axios').default;

export default function Goal(props){
  const [goals, setGoals] = useState(props.goals);
 
  console.log(goals);
  function save(goal, deadline, userId){
    if((!goal)||(!deadline)){
      return;
    }
   // const user_id = localStorage.getItem("userId");
    const newGoal = {
      goal,
      deadline,
      userId
    }; 
    //console.log(newGoal);
    //const newGoals = [...goals, newGoal];
    //setGoals(newGoals);
    return axios.post(`http://localhost:3005/api/v1/goals?userId=${localStorage.getItem(
      "userId"
    )}`, newGoal)
      .then((res)=> {
        const resObj=JSON.parse(res.config.data);
        const newGoals = [...goals, resObj];
        setGoals(newGoals);
        console.log(goals);
      });
  }

  const removeGoal = (index) => {
  //  console.log("goalRemoval", index);
    const updatedGoals = [...goals];
    const removeGoal = updatedGoals[index];
    updatedGoals.splice(index,1);
    console.log("remove", removeGoal);
    return axios.delete(`http://localhost:3005/api/v1/goals?userId=${localStorage.getItem(
      "userId"
    )}`, removeGoal)
      .then(()=> {
       setGoals(updatedGoals); 
      });
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