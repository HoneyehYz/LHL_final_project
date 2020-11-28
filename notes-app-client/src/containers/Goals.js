import React from 'react'
import "./Goals.css"


const goals = [
  {
    "id": 1,
    "goal": "Finish Project",
    "deadline": "2020-12-04"
  },
  {
    "id": 2,
    "goal": "Go over the BootCamp Content",
    "deadline": "2021-01-04"
  }
]



export default function Goals() {
  return (
    <main className="goals">
    <section className="goal">
      <h3>Goals</h3>
      {/* <GoalList goals={goals}/> */}
    </section>
    <section className="milestone">
      <h3>Milestones</h3>
      </section>
  </main>
  )
}

// <GoalShow goals={goals} editGoal={()=>console.log("Edit")} cancelGoal={()=>console.log("Cancel")}/>