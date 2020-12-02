import React, { useState } from 'react'
import "./Goals.css"
import Goal from "./components/Goal/index"
import Milestone from "./components/Milestone/index"

const goals = [
  {
    "id": 1,
    "goal": "Finish Project",
    "deadline": "2020-12-04",
    "user_id": 1
  },
  {
    "id": 2,
    "goal": "Read the book",
    "deadline": "2021-01-04",
    "user_id": 1
  }
];

const milestones = [
  {
    "milestone_id": 1,
    "milestone": "wireframe",
    "deadline": "2020-11-07",
    "completed": false,
    "goal_goal": "Finish Project",
    "goal_id":1
  },
  {
    "milestone_id": 2,
    "milestone": "ERD",
    "deadline": "2020-11-10",
    "completed": false,
    "goal_id": 1,
    "goal_goal": "Finish Project"
  },
  {
    "milestone_id": 3,
    "milestone": "Chapter1",
    "deadline": "2020-12-08",
    "completed": false,
    "goal_id": 2,
    "goal_goal": "Read the book"
  }
]

/*
function getMilestonesForGoal(state, goal) {
  console.log("goal", goal);
  if (Array.isArray(state.goals) && state.goals.length === 0) {
      return state.goals;
  } else if (!state.goal){
     return [];
  }
  else {  
    const filteredGoal = state.goals.filter(specificGoal => specificGoal.goal === goal);
    const milestones = state.milestones;
    let milestonesForGoal = [];
    milestones.forEach((milestone)=>{ 
      if(milestone.goal_id===filteredGoal[0].id){ milestonesForGoal.push(milestone)}
    });
     console.log("milestonesForGoal",milestonesForGoal);
     return milestonesForGoal; 
  } 

}

*/
function getMilestoneTrigger(state){
  if(state.goal){
    return (<Milestone goals={state.goals} milestones={state.milestones} goal={state.goal}/>);
  }
};

export default function Goals() {
 
  const [state, setState] = useState({
    goal: "",
    goals,
    milestones
  });
  
  const setGoalSelector = goal => setState({...state, goal});

  const milestoneTrigger = getMilestoneTrigger(state);
  

  return (
    <main className="goals">
    <nav className="goals_sidebar">
      <h5>Goals</h5>
      <Goal goals={state.goals} value={state.goal} setGoalSelector={setGoalSelector}/>
      </nav>

    <section className="milestone">
      {/*<Milestone goals={state.goals} milestones={state.milestones} goal={state.goal}/>*/}
      {milestoneTrigger}
      {/*<Milestone milestones={eachGoals}/>*/}
      </section>
  </main>
  )
}