import React from 'react'
import "./GoalListItem.css"


export default function GoalListItem(props) {
  
  return (
    <li className="goal__card" onClick={()=>props.setGoalSelector(props.goal)}>
      <h2 className="text--regular" value={props.goal}>{props.goal}</h2>
      <section>
        <h4>Deadline: {props.deadline}</h4>
      </section>
    
    <section>
      <section>
        {/*}
        <img
          className="goal-button"
          src="/edit.png"
          alt="Edit"
  />*/}
        <img
          className="goal-button"
          src="/trash.png"
          alt="Delete"
          onClick={props.cancelGoal} />
      </section>
    </section>
    </li>
  )
}