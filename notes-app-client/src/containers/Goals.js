import React from 'react'
import "./Goals.css"
import Goal from "./components/Goal/index"
import GoalCreateForm from "./components/Goal/GoalCreateForm"

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

function setGoal(){
  console.log("saved");
}

function cancelGoal(){
  console.log("delete");
}

export default function Goals() {
/*
  const goalItem = goals.map(goal => <Goal id = {goal.id}goal = {goal.goal} deadline={goal.deadline} setGoal={setGoal} cancelGoal={cancelGoal}/>)
*/  
  return (
    <main className="goals">
    <section className="goal">
      <h3>Goals</h3>
      <Goal goals={goals} milestones={milestones}/>
      {/*  {goalItem}*/ }
      </section>

    <section className="milestone">
      <h3>Milestones</h3>
      </section>
  </main>
  )
}

