import {React, useState} from "react";
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import "./style.css";

const axios = require('axios').default;

export default function Milestone(props) {
  const [milestones, setMilestones] = useState(props.milestones);

  function getMilestonesForGoal(goals, milestone, goal) {
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
      // console.log("milestonesbefore",milestones);
      milestones.forEach((milestone)=>{ 
        if(milestone.goal_id===goal){ milestonesForGoal.push(milestone)}
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
      userId:localStorage.getItem("userId"),
      goal_Id: value
    }; 

    
    return axios.post(`http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
      "userId"
    )}`, newMilestone)
      .then((res)=> {
        const resObj=res.data.milestone;
        const newMilestones = [...milestones, resObj];
        setMilestones(newMilestones);
      });
  }

  const completeMilestone = (id) => {
    //console.log("completeMilestone",id);
    const findItem = (item) =>item.id === id;
    const index = milestones.findIndex(findItem);
    const newMilestones = [...milestones];
    //console.log("beforeCompleted",newMilestones);
    newMilestones[index].completed_at = new Date();
    
    return axios.put(`http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
      "userId"
    )}/${id}`, newMilestones[index])
      .then((res)=> {
        console.log(res);
        //const resObj=JSON.parse(res.config.data);
        //const newMilestones = [...milestones, resObj];
        //setMilestones(newMilestones);
      });
  };

  const removeMilestone = (id) => {
    console.log(id);
    const findItem = (item) =>item.id === id;
    const index = milestones.findIndex(findItem);
    const updateMilestones = [...milestones];
    //updateMilestones.splice(index, 1);
    //setMilestones(updateMilestones);
    return axios.delete(`http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
      "userId"
    )}`, updateMilestones[index])
      .then(()=> {
        setMilestones(updateMilestones);
      });
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

