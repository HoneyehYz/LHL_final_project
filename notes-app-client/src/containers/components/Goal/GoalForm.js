import React, { useState } from "react";

import { DatePicker } from 'react-datepicker';

export default function GoalForm(props) {

  const [goal, setGoal] = useState(props.goal || "");
  const [deadline, setDeadline] = useState(props.deadline || "");
  

  function reset(){
    setGoal("");
    setDeadline("");
  };

  function cancel(){
    reset();
    //props.onCancel();
  }

  return (
    <main className="goal__card">
      <section>
        <form autoComplete="off">
         
          <input
            value={goal}
            type="text"
            placeholder="Enter Goal"
            onChange={(event) => setGoal(event.target.value)}
          />
          <input
            value={deadline}
            type="text"
            placeholder="deadline"
            onChange={(event) => setDeadline(event.target.value)}
          />
        </form>

      </section>
      <section>
        <section>
          <button onClick={() => {props.onSave(goal, deadline); cancel()}}>Add</button>
        </section>
      </section>
    </main>
  );
}