import {React, useState} from "react";
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import "./style.css";

export default function Milestone(props) {
  const [milestones, setMilestones] = useState(props.milestones);

  function getMilestonesForGoal(goals, milestone, goal) {
    if (Array.isArray(goals) && goals.length === 0) {
        return goals;
    } else if (!goal){
       return [];
    }
    else {  
     // const filteredGoal = goals.filter(specificGoal => specificGoal.goal === goal);
      const milestones = milestone;
      let milestonesForGoal = [];
      // console.log("milestonesbefore",milestones);
      milestones.forEach((milestone)=>{ 
        if(milestone.goal_goal===goal){ milestonesForGoal.push(milestone)}
      });
      // console.log("milestonesForGoal",milestonesForGoal);
       return milestonesForGoal; 
    } 
  
  }

  const eachGoals = getMilestonesForGoal(props.goals, milestones, props.goal);
  // console.log("eachGoals", eachGoals);
  
   function save(milestones, milestone, deadline,value){
     //console.log("MilestoneSave",value);
    if((!milestone)||(!deadline)){
      return;
    }
    const newMilestone = {
      milestone,
      deadline,
      "milestone_id": Math.floor(Math.random()*1000),
      "completed": false,
      "goal_goal": value
    }; 

    const newMilestones = [...milestones, newMilestone];
    setMilestones(newMilestones);
    console.log("MileSave",milestones);
  }

  const completeMilestone = (id) => {
    const findItem = (item) =>item.milestone_id === id;
    const index = milestones.findIndex(findItem);
    const newMilestones = [...milestones];
    console.log("beforeCompleted",newMilestones);
    newMilestones[index].completed = true;
    setMilestones(newMilestones);
    console.log("afterCompleted",milestones);
  };

  const removeMilestone = (id) => {
    console.log(id);
    const findItem = (item) =>item.milestone_id === id;
    const index = milestones.findIndex(findItem);
    const updateMilestones = [...milestones];
    updateMilestones.splice(index, 1);
    setMilestones(updateMilestones);
  };
  

  return (
    <div className="milestone">
      <section className="milestone-list">
      <h5>Milestone</h5>
      <MilestoneForm onSave={save} value={props.goal} milestones={milestones}/>
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

