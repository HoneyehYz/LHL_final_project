import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './Goals.css';
import Goal from './components/Goal/index';
import Milestone from './components/Milestone/index';

import { AppContext } from '../libs/contextLib';

function getMilestoneTrigger(state) {
  if (state.goal) {
    return (
      <Milestone
        goals={state.goals}
        milestones={state.milestones}
        goal={state.goal}
      />
    );
  }
}

export default function Goals() {
  const context = useContext(AppContext);

  const [state, setState] = useState({
    goal: '',
    goals: [],
    milestones: [],
  });

  const setGoalSelector = (goal) => setState({ ...state, goal });

  useEffect(() => {
    Promise.all([
      axios.get(
        `http://localhost:3005/api/v1/goals?userId=${localStorage.getItem(
          'userId'
        )}`
      ),
      axios.get(
        `http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
          'userId'
        )}`
      ),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        goals: all[0].data.goals,
        milestones: all[1].data.milestones,
      }));

      context.dispatch({
        type: 'SET-GOALS',
        goals: all[0].data.goals,
      });
    });
  }, []);

  const milestoneTrigger = getMilestoneTrigger(state);

  return (
    <main className='goals'>
      <nav className='goals_sidebar'>
        <h5>Goals</h5>
        <Goal goals={context.state.goals} setGoalSelector={setGoalSelector} />
      </nav>

      <section className='milestone'>{milestoneTrigger}</section>
    </main>
  );
}
