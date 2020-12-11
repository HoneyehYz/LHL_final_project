import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './Goals.css';
import Goal from './components/Goal/index';
import Milestone from './components/Milestone/index';

import { AppContext } from '../libs/contextLib';

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
      context.dispatch({
        type: 'SET-GOALS',
        goals: all[0].data.goals,
      });

      context.dispatch({
        type: 'SET-MILESTONES',
        milestones: all[1].data.milestones,
      });
    });
  }, []);

  const getMilestoneTrigger = (state) => {
    if (state.goal) {
      return (
        <Milestone
          goals={context.state.goals}
          milestones={context.state.milestones}
          goal={state.goal}
        />
      );
    }
  };

  const milestoneTrigger = getMilestoneTrigger(state);

  return (
    <main className='goals'>
      <nav className='goals_sidebar'>
        <h3>Goals</h3>
        <Goal goals={context.state.goals} setGoalSelector={setGoalSelector} />
      </nav>

      <section className='milestone'>{milestoneTrigger}</section>
    </main>
  );
}
