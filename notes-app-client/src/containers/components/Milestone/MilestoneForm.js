import React, { useState } from "react";
import "./style.css";
import { DatePicker } from 'react-datepicker';

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

      </section>
      <section>
        <section>
          <button onClick={() => {props.onSave(milestone, deadline);reset(); }}>Add</button>
        </section>
      </section>
    </main>
  );
}