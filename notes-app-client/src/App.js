import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { Goals } from "./containers/Goals";


function App() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
    history.push("/login");
  }
  
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Goal Tracker
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        ) : (
         <>
        <LinkContainer to="/signup">
        <Nav.Link>Signup</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
    )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* defaultActiveKey="first"  this is for the first tab*/}
<Tab.Container id="left-tabs-example" >       
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
          <Nav.Link eventKey="fourth">Chat</Nav.Link>
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
        <Goals/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Goals/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
   

    </div>
  );
}

export default App;