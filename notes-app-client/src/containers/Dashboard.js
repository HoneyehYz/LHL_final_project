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
    
      // <div className="row">
      //   <div className="column" style={{backgroundColor: "grey"}}>
      //     <h3>Daily Performance</h3>
      //     <p>Some text..</p>
      //   </div>
      //   <div className="column" style={{backgroundColor: "lightgrey"}}>
      //     <h3>Upcoming Milestone</h3>
      //     <p>Milestone 1</p>
      //     <p>Milestone 2</p>
      //   </div>
      //   <div className="column" style={{backgroundColor: "grey"}}>
      //     <h3>Performance</h3>
      //     <p>Some text..</p>
      //   </div>
      //   <script type="text/javascript" src="canvasjs.min.js"></script>
        <Container> 
           <h2>Welcome to the Dashboard</h2>
            <Row>
              <Col>
              <div style={{color:"red",backgroundColor:"yellow", height:"300px"}}> A </div>
              </Col>
              <Col>
              <div style={{color:"red",backgroundColor:"purple", height:"300px"}}> A </div>
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