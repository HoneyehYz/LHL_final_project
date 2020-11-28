import React, { useState } from 'react'
import "./Goals.css"
import Goal from "./components/Goal/index"
import Milestone from "./components/Milestone/index"

const goals = [
  {
    "id": 1,
    "goal": "Finish Project",
    "user_id": 1,
    "deadline": "2020-12-04",
  },
  {
    "id": 2,
    "goal": "Go over the BootCamp Content",
    "deadline": "2021-01-04",
    "user_id": 1,
  }
];

const milestones = [
  {
    "milestone_id": 1,
    "milestone": "wireframe",
    "deadline": "2020-11-07",
    "completed_at": "2020-11-07",
    "goal_id":1
  },
  {
    "milestone_id": 2,
    "milestone": "wireframe",
    "deadline": "2020-11-07",
    "completed_at": "2020-11-07",
     "goal_id": 1
  }
]

function getMilestonesForGoal(state, goal) {
  console.log("get milestonesforGoal"+state+goal);
  if (Array.isArray(state.goals) && state.goals.length === 0) {
      return state.goals;
  } else {  
    const filteredGoal = state.goals.filter(specificGoal => specificGoal.goal === goal);
    const id = filteredGoal.id;
    const milestones = state.milestones;
    let milestonesForGoal = [];

    milestones.forEach((milestone)=>{ if(milestone.goal_id===id){ milestonesForGoal.push(milestone)}});
     console.log(milestonesForGoal);
     return milestonesForGoal;
  }

}

export default function Goals() {
 
  const [state, setState] = useState({
    goal: "",
    goals,
    milestones
  });

  //console.log(state);
  
  const setGoalSelector = goal => setState({...state, goal});
  console.log(state);
  
  const eachGoals = getMilestonesForGoal(state, state.goal);
  
  return (
    <main className="goals">
    <nav className="goals_sidebar">
      <h3>Goals</h3>
      <Goal goals={state.goals} value={state.goal} setGoalSelector={setGoalSelector}/>
      </nav>

    <section className="milestone">
      {/*<Milestone milestones={state.milestones}/>*/}
      <Milestone milestones={eachGoals}/>
      </section>
  </main>
  )
}
