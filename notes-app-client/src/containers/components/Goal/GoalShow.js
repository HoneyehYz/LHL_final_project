import React from 'react';
import "./style.css";

export default function GoalShow(props) {

  return (
      <main className="goal__card">
      <section>
        <h2 className="text--regular">{props.goal}</h2>
        <section>
          <h4>Deadline</h4>
          <h3>{props.deadline}</h3>
        </section>
      </section>
      <section>
          <img
            src="/edit.png"
            alt="Edit"
            onClick={props.editGoal}
          />
          <img
            src="/trash.png"
            alt="Delete"
            onClick={props.cancelGoal}
          />
      </section>
      <button onClick={() => removeGoal(index)}>x</button>
    </main>
  );
}