import React, { useState } from 'react'

function Goal({ goal, deadline, index, removeGoal }) {

  return (
      <main className="goal__card">
      <section>
        <h2 className="text--regular">{goal.goal}</h2>
        <section>
          <h4>Deadline</h4>
          <h3>{deadline}</h3>
        </section>
      </section>
      <section>
      <button onClick={() => removeGoal(index)}>x</button>
        
      </section>
    </main>
  );
}
{/*
function GoalForm({ addGoal }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addGoal(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}*/}
function GoalForm({ addGoal }) {
  const [goalvalue, setGoalValue] = useState("");
  const [deadlinevalue, setDeadlineValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!goalvalue) return;
    addGoal(goalvalue);
    setGoalValue("");
  };

  return (
    <div>
    <form>
      <input
        type="text"
        className="input"
        value={goalvalue}
        onChange={e => setGoalValue(e.target.value)}
      />
      <input
        type="text"
        className="input"
        value={deadlinevalue}
        onChange={e => setDeadlineValue(e.target.value)}
      />
    </form>
    <button onSubmit={handleSubmit}>Add</button>
    </div>
  );
}

export default function GoalCreateForm(props){
  const [goals, setGoals] = useState(props.goals);

  const addGoal = text => {
    const newGoals = [...goals, {"goal": text }];
    setGoals(newGoals);
  };

  const removeGoal = index => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  }

  return (
    <div className="app">
      <div className="todo-list">
      <GoalForm addGoal={addGoal} />
        {goals.map((goal,index)=> (
          <Goal
            key={goal.id}
            index={goal.id}
            goal={goal}
            deadline={goal.deadline}
            removeGoal={removeGoal}
          />
        ))}
      </div>
    </div>
  );








}
