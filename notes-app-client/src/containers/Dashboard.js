import "./Dashboard.css";
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import { Container, Col, Row, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

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
/*
function getUpcomingMilestone(milestone){
  const sortedMilestones = milestone.slice().sort((a, b) => a.date - b.date)
  return sortedMilestones.slice(0,3)
};
*/
class Dashboard extends Component {
  render() {
    // const upcomingMilestone = getUpComingMilestone(milestones);
    const options = {
      animationEnabled: true,
      title: {
        text: "Total Scores",
      },
      axisY: {
        title: "Score",
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
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
            { y: 1, label: "12" },
          ],
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
            { y: 0.5, label: "12" },
          ],
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
        },
      ],
    };
    return (
      <Container>
        {/* <h2>Welcome to the Dashboard</h2> */}
        <Row>
          <Col>
            <div className="cell" style={{ height: "300px", border: "10px" }}>
              <h3 style={{ textAlign: "center", padding: "10px" }}>
                <MilestonesDashboard />
              </h3>
            </div>
          </Col>
          <Col>
            <div className="cell" style={{ height: "300px" }}>
              <h3 style={{ textAlign: "center", padding: "10px" }}>
                {" "}
                Quote of the Day{" "}
              </h3>
              <p style={{ textAlign: "center", padding: "10px" }}>
                {Quote.getRandomQuote()}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <CanvasJSChart options={options} style={{ padding: "80px" }} />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
