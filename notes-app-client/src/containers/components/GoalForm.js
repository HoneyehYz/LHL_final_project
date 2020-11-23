import React, { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import Goals from "../Goals";

export default function Form(props) {
{/*
  const [goal, setGoal] = useState(props.goal || "");
  const [dealine, setDeadline] = useState(props.dealine || null);

  function reset(){
    setName("");
    setInterviewer(null);
  };

  function cancel(){
    reset();
    props.onCancel();
  }
*/}
  return (
    <main className="goal__card appointment--create">
      <section>
        <form autoComplete="off">
          <input
            value={goal}
            type="text"
            placeholder="Enter Goal"
            onChange={(event) => setGoal(event.target.value)}
          />
        </form>

        {/*Calendar */} 
      </section>
      <section>
        <section>
          <Button danger onClick={() => cancel() }>Cancel</Button>
          <Button confirm onClick={() => props.onSave(goal, calendar)}>Save</Button>
        </section>
      </section>
    </main>
  );
}
