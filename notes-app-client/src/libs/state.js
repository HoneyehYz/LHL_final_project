export const initialState = {
  goals: [],
  milestones: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET-GOALS':
      return {
        ...state,
        goals: action.goals,
      };
    case 'REMOVE-GOAL':
      const currentGoals = state.goals.filter((goal) => {
        return goal.id !== action.goalId;
      });

      return {
        ...state,
        goals: currentGoals,
      };
    case 'SET-MILESTONES':
      return {
        ...state,
        milestones: action.milestones,
      };
    case 'REMOVE-MILESTONE':
      const currentMilestones = state.milestones.filter((milestone) => {
        return milestone.id !== action.milestoneId;
      });

      return {
        ...state,
        milestones: currentMilestones,
      };
    default:
      return state;
  }
};
