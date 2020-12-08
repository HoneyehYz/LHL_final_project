import React, { useState } from 'react'
import GoalForm from './GoalForm';
import GoalList from './GoalList';

const axios = require('axios').default;

export default function Goal(props){
  const [goals, setGoals] = useState(props.goals);
 
  console.log("goals",goals);
  function save(goal, deadline, userId){
    if((!goal)||(!deadline)){
      return;
    }

    const newGoal = {
      goal,
      deadline,
      userId
    }; 

    return axios.post(`http://localhost:3005/api/v1/goals?userId=${localStorage.getItem(
      "userId"
    )}`, newGoal)
      .then((res)=> {
        const resObj=res.data.goal;
        console.log(resObj);
        const newGoals = [...goals, resObj];
        setGoals(newGoals);
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
      <GoalList goals={props.goals} value={props.value} onChange={props.setGoalSelector} cancelGoal={removeGoal}/>
      </section>
    </div>
  );
        }

//      <GoalList goals={props.state.goals} value={props.state.value} onChange={props.setGoalSelector} cancelGoal={removeGoal}/>        