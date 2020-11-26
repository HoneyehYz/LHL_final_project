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

export default function Goals() {
 
  const [state, setState] = useState({
    goal: "",
    goals,
    milestones
  });
  
  //const setGoalSelector = goal => setState({...state, goal});

  function setGoalSelector (goal){console.log(goal);}
  
  return (
    <main className="goals">
    <nav className="goals_sidebar">
      <h3>Goals</h3>
      <Goal goals={state.goals} setGoalSelector={setGoalSelector}/>
      </nav>

    <section className="milestone">
      <Milestone milestones={state.milestones}/>
      </section>
  </main>
  )
}
/*
const MilestonesforGoal = getMilestonesForGoal(state, state.day);
state.milestones   goal_id

function getMilestoneForGoal(state, goalid) {

};

const appointmenttag = dailyAppointments.map(appointment => { 
  const interview = getInterview(state, appointment.interview);
  return (
    <Appointment 
      key={appointment.id}
      id = {appointment.id}
      time = {appointment.time}
      interview = {interview}
      interviews = {AppointmentInterviewer}
      bookInterview = {bookInterview}
      cancelInterview = {cancelInterview}
    />
  )
});
*/