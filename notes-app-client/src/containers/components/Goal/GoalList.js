import {React, useState} from 'react'

import GoalListItem from "./GoalListItem"
import "./style.css";


export default function GoalList(props) {

  console.log("GoalList",props);

  const goalList = props.goals.map((goal,index) =>{
    return (
      <ul className="goalList">
      <GoalListItem
        key={index}
        index={index}
        id={goal.id} 
        goal={goal.goal}
        deadline={goal.deadline} 
        cancelGoal={()=>{props.cancelGoal(index);goal.goal=""}}
        selected={goal.id === props.value} 
        setGoalSelector={(event)=>props.onChange(goal.id)}
      />
      </ul>);
    });
  
  return (
  <section>{goalList}</section>
  )
  
}
//id={goal.id} 