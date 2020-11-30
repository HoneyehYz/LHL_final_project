import "./Dashboard.css"
import React, {Component} from "react";
import CanvasJSReact from './canvasjs.react';
import {Container,Col,Row} from 'react-bootstrap';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MilestonesDashboard extends React.Component { 
  render() {
    const milestone = [
  {
    "milestone_id": 1,
    "milestone": "wireframe",
    "deadline": "2020-11-07",
    "completed": false,
    "goal_id":1
  },
  {
    "milestone_id": 2,
    "milestone": "ERD",
    "deadline": "2020-11-10",
    "completed": false,
     "goal_id": 1
  },
  {
    "milestone_id": 3,
    "milestone": "Chapter1",
    "deadline": "2020-12-08",
    "completed": false,
     "goal_id": 2
  }
   ];
   const sortedMilestones = milestone.slice().sort((a, b) => a.date - b.date)
   sortedMilestones.slice(0,3);
  return (
    <div>
  <h3>Uncoming Milestones</h3>
  <table class="table">
  <tr>
    <th>Milestones</th>
    <th>Deadlines</th> 
  </tr>
  <tr>
    <td>{sortedMilestones[0].milestone}</td>
    <td>{sortedMilestones[0].deadline}</td>
  </tr>
  <tr>
    <td>{sortedMilestones[1].milestone}</td>
    <td>{sortedMilestones[1].deadline}</td>
  </tr>
  <tr>
    <td>{sortedMilestones[2].milestone}</td>
    <td>{sortedMilestones[2].deadline}</td>
  </tr>
</table>
  </div>
  )
  } 
}
/*
function getUpcomingMilestone(milestone){
  const sortedMilestones = milestone.slice().sort((a, b) => a.date - b.date)
  return sortedMilestones.slice(0,3)
};
*/
class Dashboard extends Component {

  render(){
   // const upcomingMilestone = getUpComingMilestone(milestones);
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Performance Chart"
			},
			axisY: {
				title: "Score",
				suffix: ""
			},
			axisX: {
				title: "Week ",
				prefix: "W",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}",
				dataPoints: [
					{ x: 1, y: 0.5 },
					{ x: 2, y: 1 },
					{ x: 3, y: 0.5 },
					{ x: 4, y: 0 },
					{ x: 5, y: 0.5 },
					{ x: 6, y: 1 },
					{ x: 7, y: 1 }
				]
      }]
		}
    return (
        <Container> 
           <h2>Welcome to the Dashboard</h2>
            <Row>
              <Col>
              <div style={{color:"red",backgroundColor:"yellow", height:"300px"}}> <MilestonesDashboard/></div>
              </Col>
              <Col>
              <div style={{color:"red",backgroundColor:"purple", height:"300px"}}> A </div>
              </Col>
            </Row>
            <Row>
            <CanvasJSChart options = {options} style={{padding:"80px"}} />
            </Row>
        </Container>
    );
  
  }

}

export default Dashboard; 