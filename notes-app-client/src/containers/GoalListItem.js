import React from 'react'
//import GoalShow from "./components/GoalShow"
import "./GoalListItem.css"
export default function GoalListItem(props) {
  console.log(props)
  return (
    <section className="goal__card" onClick={()=>props.setGoal(props.goal)}>
      <h2 className="text--regular">{props.goal}</h2>
      <section>
        <h4>Deadline: {props.deadline}</h4>
      </section>
    
    <section>
      <section>
        <img
          className="goal-button"
          src="/edit.png"
          alt="Edit"
          onClick={props.editGoal}
        />
        <img
          className="goal-button"
          src="/trash.png"
          alt="Delete"
          onClick={props.cancelGoal} />
      </section>
    </section>
    </section>
  )
}