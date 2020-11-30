import {React, useState} from 'react'
import "./style.css";

export default function MilestoneListItem(props) {

  return (
    <li className="milestone__card">
      <div style={{ textDecoration: props.completed ? "line-through" : "" }}>
      <h4>{props.milestone}</h4>
      <section><h5>Deadline: {props.deadline}</h5></section>
      </div>
      <section>
        <button onClick={props.completeMilestone}>Complete</button>
        <img
          className="milestone-button"
          src="/trash.png"
          alt="Delete"
          onClick={props.cancelMilestone} />
      </section>
    </li>
  );
}