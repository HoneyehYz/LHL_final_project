import "./Dashboard.css"
import React, {Component} from "react";
import CanvasJSReact from './canvasjs.react';

import {Container,Col,Row,Table} from 'react-bootstrap';


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
  <h3>Upcoming Milestones</h3>

  <Table striped bordered hover size="sm">
  <thead>

  <tr>
    <th>Milestones</th>
    <th>Deadlines</th> 
  </tr>

  </thead>
  <tbody>


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

  </tbody>

</Table>

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
    title:{
      text: "Total Scores"
    },
    axisY : {
      title: "Score"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "Eating Healthy",
      showInLegend: true,
      dataPoints: [
        { y: 1, label: "1" },
        { y: 0.5, label: "2" },
        { y: 1, label: "3" },
        { y: 0, label: "4" },
        { y: 1, label: "5" },
        { y: 0.5, label: "6" },
        { y: 0.5, label: "7" },
        { y: 1, label: "8" },
        { y: 0, label: "9" },
        { y: 1, label: "10" },
        { y: 0.5, label: "11" },
        { y: 1, label: "12" }
      ]
    },
    {
      type: "spline",
      name: "Flossing",
      showInLegend: true,
      dataPoints: [
        { y: 1, label: "1" },
        { y: 1, label: "2" },
        { y: 0, label: "3" },
        { y: 0.5, label: "4" },
        { y: 1, label: "5" },
        { y: 0, label: "6" },
        { y: 0, label: "7" },
        { y: 1, label: "8" },
        { y: 0.5, label: "9" },
        { y: 0, label: "10" },
        { y: 0.5, label: "11" },
        { y: 0.5, label: "12" }
      ]
    // },
    // {
    //   type: "spline",
    //   name: "Read a book",
    //   showInLegend: true,
    //   dataPoints: [
    //     { y: 0, label: "Read a book" },
    //     { y: 0, label: "Read a book" },
    //     { y: 0, label: "Read a book" },
    //     { y: 1, label: "Read a book" },
    //     { y: 1, label: "Read a book" },
    //     { y: 1, label: "Read a book" },
    //     { y: 0.5, label: "Read a book" },
    //     { y: 1, label: "Read a book" },
    //     { y: 0, label: "Read a book" },
    //     { y: 0.5, label: "Read a book" },
    //     { y: 0, label: "Read a book" },
    //     { y: 0, label: "Read a book" }
    //   ]
    }
  ]
}
    return (

      <Container> 
         {/* <h2>Welcome to the Dashboard</h2> */}
          <Row>
            <Col>
            <div className="cell" style={{height:"300px", border:"10px"}}> 
            <h3 style={{textAlign:"center", padding:"10px"}}><MilestonesDashboard/></h3>
            </div>
            </Col>
            <Col>
            <div className="cell" style={{height:"300px"}}> 
            <h3 style={{textAlign:"center", padding:"10px"}}> Quote of the Day </h3>
            <p style={{textAlign:"center", padding:"10px"}}>Go where there is no path and leave a trail for others.</p>
             </div>
            </Col>
          </Row>
          <Row>
          <CanvasJSChart options = {options} style={{padding:"80px"}} />
          </Row>
      </Container>
      )
  
  }

}

export default Dashboard;
