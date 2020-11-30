import {React, useState} from "react";
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import "./style.css";

export default function Milestone(props) {
  
  const [milestones, setMilestones] = useState(props.milestones);
  console.log("milestonestoMileIndex,prop", milestones);

  function save(milestone, deadline){
    if((!milestone)||(!deadline)){
      return;
    }
    const newMilestone = {
      milestone,
      deadline
    }; 
    const newMilestones = [...props.milestones, newMilestone];
    setMilestones(newMilestones);
  }

  const completeMilestone = (index) => {
    console.log(index);
    const newMilestones = [...milestones];
    newMilestones[index].completed = true;
    setMilestones(newMilestones);
  };

  const removeMilestone = (index) => {
    console.log(index);
    const updateMilestones = [...milestones];
    updateMilestones.splice(index, 1);
    setMilestones(updateMilestones);
  };
  

  return (
    <div className="milestone">
      <section className="milestone-list">
      <h3>Milestone</h3>
      <MilestoneForm onSave={save} />
      <MilestoneList
        milestones={milestones}
        completeMilestone={completeMilestone}
        cancelMilestone={removeMilestone}
      />
      </section>
    </div>
  );
}

//milestones={props.milestones}
