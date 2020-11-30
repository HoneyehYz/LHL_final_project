import {React, useState} from 'react'

import GoalListItem from "./GoalListItem"
import "./style.css";


export default function GoalList(props) {

  //console.log(props.value);

  const goalList = props.goals.map((goal,index) =>{
    return (
      <ul className="goalList">
      <GoalListItem
        key={index}
        index={index}
        id={goal.id} 
        goal={goal.goal}
        deadline={goal.deadline} 
        cancelGoal={()=>props.cancelGoal(index)}
        selected={goal.goal === props.value} 
        setGoalSelector={(event)=>props.onChange(goal.goal)}
      />
      </ul>);
    });
  
  return (
  <section>{goalList}</section>
  )
}