import {React, useState} from 'react'
import MilestoneListItem from "./MilestoneListItem"
import MilestoneForm from "./MilestoneForm"
import "./style.css";

export default function MilestoneList(props) {
 console.log("milestoneList", props);

  const milestoneList = props.milestones.map((milestone,index) =>{
    return (
      <div>
      <ul className="milestoneList">
      <MilestoneListItem
        key={index}
        index={index}
        id={milestone.id}
        milestone={milestone.milestone}
        deadline={milestone.deadline} 
        completed={milestone.completed}
        completeMilestone={()=>props.completeMilestone(index)}
        cancelMilestone={()=>props.cancelMilestone(index)}
      />
      </ul>
      </div>);
  });
  
  return (
  <section>{milestoneList}</section>
  )
}
