import "./Dashboard.css"
import React, {Component} from "react";
import CanvasJSReact from './canvasjs.react';
import {Container,Col,Row} from 'react-bootstrap'
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends Component {
  render(){
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Performance Chart"
			},
			axisY: {
				title: "Avg. Score",
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
           {/* <h2>Welcome to the Dashboard</h2> */}
            <Row>
              <Col>
              <div className="cell" style={{height:"300px", border:"10px"}}> 
              <h3 style={{textAlign:"center", padding:"10px"}}> Upcoming Milestones </h3>
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