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

    case 'ADD-GOAL':
      return {
        ...state,
        goals: [...state.goals, action.goal],
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

    case 'ADD-MILESTONE':
      console.log('ON ADD MILESTONE: ', action.milestone);

      console.log('MILESTONES BEFORE: ', state.milestones);

      return {
        ...state,
        milestones: [...state.milestones, action.milestone],
      };

    default:
      return state;
  }
};
