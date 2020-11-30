import {React, useState} from 'react'
import MilestoneListItem from "./MilestoneListItem"
import "./style.css";

export default function MilestoneList(props) {
 console.log("milestoneList", props);
  const milestoneList = props.milestones.map((milestone,index) =>{
    return (
      <ul className="milestoneList">
      <MilestoneListItem
        key={index}
        index={index}
        id={milestone.id}
        milestone={milestone.milestone}
        deadline={milestone.deadline} 
        completeMilestone={props.completeMilestone}
        cancelMilestone={()=>props.cancelMilestone(index)}
      />
      </ul>);
  });
  
  return (
  <section>{milestoneList}</section>
  )
}