import React, { useState } from "react";
import "./style.css";
import { DatePicker } from 'react-datepicker';
import Button from 'react-bootstrap/Button';

export default function MilestoneForm(props) {
  const [milestone, setMilestone] = useState(props.milestone || "");
  const [deadline, setDeadline] = useState(props.deadline || "");
  

  function reset(){
    setMilestone("");
    setDeadline("");
  };

  return (
    <main className="milestone_item">
      <section>
        <form autoComplete="off">
          <input
            value={milestone}
            type="text"
            placeholder="Enter Milestone"
            onChange={(event) => setMilestone(event.target.value)}
          />
          <input
            value={deadline}
            type="text"
            placeholder="Enter Deadline"
            onChange={(event) => setDeadline(event.target.value)}
          />
        </form>
         <br/>
      </section>
      <section>
        <section>
        <Button variant="outline-dark"  onClick={() => {props.onSave(props.milestones,milestone, deadline,props.value);reset(); }}>Add</Button>
        </section>
      </section>
    </main>
  );
}