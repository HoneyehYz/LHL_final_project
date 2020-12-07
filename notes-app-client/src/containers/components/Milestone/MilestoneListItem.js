import {React, useState} from 'react'
import "./style.css";
import Button from 'react-bootstrap/Button';

export default function MilestoneListItem(props) {
  return (
    <li className="milestone__card">
      <div style={{ textDecoration: props.completed ? "line-through" : "" }}>
      <h4>{props.milestone}</h4>
      <section><h5>Deadline: {props.deadline}</h5></section>
      </div>
      <section>

      <img
        className="milestone-button"
        src="/done.png"
        alt="Done"
        onClick={props.completeMilestone} />
      <img
        className="milestone-button"
        src="/trash.png"
        alt="Delete"
        onClick={props.cancelMilestone} />
      </section>
    </li>
  );
}

//      <Button variant="outline-secondary"  onClick={props.completeMilestone}>Done</Button>

/*       <img
className="milestone-button"
src="/trash.png"
alt="Delete"
onClick={props.cancelMilestone} />
*/