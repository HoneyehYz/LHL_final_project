import {React, useState} from 'react'
import MilestoneListItem from "./MilestoneListItem"
import MilestoneForm from "./MilestoneForm"
import "./style.css";

export default function MilestoneList(props) {

  const milestoneList = props.milestones.map((milestone,index) =>{
    return (
      <div>
      <ul className="milestoneList">
      <MilestoneListItem
        key={index}
        index={index}
        id={milestone.milestone_id}
        milestone={milestone.milestone}
        deadline={milestone.deadline} 
        completed={milestone.completed}
        completeMilestone={()=>props.completeMilestone(milestone.milestone_id)}
        cancelMilestone={()=>props.cancelMilestone(milestone.milestone_id)}
      />
      </ul>
      </div>);
  });
  
  return (
  <section>{milestoneList}</section>
  )
}