import React from 'react'
//import GoalShow from "./components/GoalShow"
import GoalListItem from "./GoalListItem"
//import "./GoalList.css"
/*
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
*/
// selected={goal.goal === props.value}
//setGoal={(event=>props.onChange(goal.goal))}
export default function GoalList(props) {
  const goalList = props.goals.map(goal =>{
    return (
      <GoalListItem
        goal={goal.goal}
        deadline={goal.deadline} 
        editGoal={()=>console.log("Edit")}
        cancelGoal={()=>console.log("Cancel")}
      />);
  });
  return (
  <section>{goalList}</section>
  )
}
