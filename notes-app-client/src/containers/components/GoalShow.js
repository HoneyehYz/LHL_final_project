import React from "react";
import GoalList from "../GoalList";
import "./style.css";

export default function GoalShow(props) {
  return (
     <GoalList />
  );
}

/*
    <main  className="goal__card">
      <section>
        <h2 className="text--regular">{prop.goal}</h2>
        <section>
          <h4>Deadline: {prop.deadline}</h4>
        </section>
      </section>
      <section>
        <section>
          <img
            className="appointment__actions-button"
            src="/edit.png"
            alt="Edit"
            onClick={props.editGoal}
          />
          <img
            className="appointment__actions-button"
            src="/trash.png"
            alt="Delete"
            onClick={props.cancelGoal} />
        </section>
      </section>
    </main>
*/