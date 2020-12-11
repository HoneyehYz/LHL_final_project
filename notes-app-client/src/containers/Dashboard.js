
import "./Dashboard.css";
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { Container, Col, Row, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Carousel from 'react-bootstrap/Carousel'

const Quote = require('inspirational-quotes');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MilestonesDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milestones: [],
    };
  }



  async componentDidMount() {
    try {
      const res = await axios.get(
        `http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
          "userId"
        )}`
      );

      this.setState({ milestones: res.data.milestones });
    } catch (err) {
      toast.error("Could not retrieve user milestones");
    }
  }

  render() {
    return this.state.milestones.length ? (
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
            {this.state.milestones.map((milestone) => (
              <tr>
                <td>{milestone.milestone}</td>
                <td>{milestone.deadline}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ) : (
      <div>
        <h3>Upcoming Milestones</h3>
        <p style={{ textAlign: "center", padding: "10px", fontSize: "18px" }}>
          No milestones so far
        </p>
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {

    return (
 
     <Carousel className="page">
     <Carousel.Item interval={500}>
      <h3>Quota of the Day</h3>
      <p>{Quote.getRandomQuote()}</p>
     </Carousel.Item>
     <Carousel.Item>
    <MilestonesDashboard />
  </Carousel.Item>
     </Carousel>
      
    );
  }
}

export default Dashboard;

