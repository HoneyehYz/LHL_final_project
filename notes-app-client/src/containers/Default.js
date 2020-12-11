import React  from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dashboard from "./Dashboard";
import Goals from "./Goals";
import Performances from "./Performances";
import Chat1 from "./Chat1";
import Email from "./Email"

export default function Default() {
  return ( 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
      <Nav.Item>
          <Nav.Link eventKey="first">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Goals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Performance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Dashboard /> 
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Goals/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Performances/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Email/>
        </Tab.Pane>

      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  )
}