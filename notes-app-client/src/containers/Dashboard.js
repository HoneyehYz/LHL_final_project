import React from 'react'
import "./Dashboard.css"


export default function Dashboard() {
  
  return (
    
<div className="row">
  <div className="column" style={{backgroundColor: "grey"}}>
    <h3>Daily Performance</h3>
    <p>Some text..</p>
  </div>
  <div className="column" style={{backgroundColor: "lightgrey"}}>
    <h3>Upcoming Milestone</h3>
    <p>Milestone 1</p>
    <p>Milestone 2</p>
  </div>
  <div className="column" style={{backgroundColor: "grey"}}>
    <h3>Performance</h3>
    <p>Some text..</p>
  </div>
</div>
  )
}
