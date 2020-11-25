import React from 'react'

import GoalListItem from "./GoalListItem"
import GoalForm from "./GoalForm"
import "./style.css";

export default function GoalList(props) {

  const goalList = props.goals.map(goal =>{
    return (
      <ul className="goalList">
      <GoalListItem
        goal={goal.goal}
        deadline={goal.deadline} 
        editGoal={()=>console.log("Edit")}
        cancelGoal={()=>console.log("Cancel")}
        selected={goal.goal === props.goal} 
        setGoalSelect={event=>props.onChange(goal.goal)}
      />
      </ul>);
    });
  
  return (
  <section>{goalList}</section>
  )
}