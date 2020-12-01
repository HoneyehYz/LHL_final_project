import {React, useState} from "react";
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import "./style.css";

export default function Milestone(props) {
  
  const [milestones, setMilestones] = useState(props.milestones);

  function getMilestonesForGoal(goals,milestone, goal) {
    console.log("goal", goal);
    if (Array.isArray(goals) && goals.length === 0) {
        return goals;
    } else if (!goal){
       return [];
    }
    else {  
     // const filteredGoal = goals.filter(specificGoal => specificGoal.goal === goal);
  
      const milestones = milestone;
      let milestonesForGoal = [];
       console.log("milestonesbefore",milestones);
      milestones.forEach((milestone)=>{ 
        if(milestone.goal_goal===goal){ milestonesForGoal.push(milestone)}
      });
       console.log("milestonesForGoal",milestonesForGoal);
       return milestonesForGoal; 
    } 
  
  }

  const eachGoals = getMilestonesForGoal(props.goals, milestones, props.goal);
   console.log("eachGoals", eachGoals);
  
   function save(milestone, deadline){
    if((!milestone)||(!deadline)){
      return;
    }
    const newMilestone = {
      milestone,
      deadline,
      milestone_id: Math.floor(Math.random()*1000),
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
        milestones={eachGoals}
        completeMilestone={completeMilestone}
        cancelMilestone={removeMilestone}
      />
      
      </section>
    </div>
  );

}

//milestones={props.milestones}

