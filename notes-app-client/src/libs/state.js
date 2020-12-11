export const initialState = {
  goals: [],
  milestones: [],
  tasks: [],
  reports: {
    animationEnabled: true,
    title: {
      text: 'Total Scores',
    },
    axisY: {
      title: 'Score',
    },
    toolTip: {
      shared: true,
    },
    data: [],
  },
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

      const remainedMilestones = state.milestones.filter((milestone) => {
        return milestone.goal_id !== action.goalId;
      });

      return {
        ...state,
        goals: currentGoals,
        milestones: remainedMilestones,
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
      return {
        ...state,
        milestones: [...state.milestones, action.milestone],
      };

    case 'COMPLETE-MILESTONE':
      const milestoneIndex = state.milestones.findIndex((milestone) => {
        return milestone.id === action.milestone.id;
      });

      const currentMilestonesAgain = state.milestones;

      currentMilestonesAgain.splice(milestoneIndex, 1, action.milestone);

      return {
        ...state,
        milestones: currentMilestonesAgain,
      };

    case 'SET-TASKS':
      return {
        ...state,
        tasks: action.tasks,
      };

    case 'REMOVE-TASK':
      const currentTasks = state.tasks.filter((task) => {
        return task.id !== action.taskId;
      });

      const currentReports = state.reports.data.filter((task) => {
        return task.taskId !== action.taskId;
      });

      return {
        ...state,
        tasks: currentTasks,
        reports: {
          ...state.reports,
          data: [...currentReports],
        },
      };

    case 'COMPLETE-TASK':
      const taskIndex = state.tasks.findIndex((task) => {
        return task.id === action.task.id;
      });

      const currentTasksAgain = state.tasks;

      currentTasksAgain.splice(taskIndex, 1, action.task);

      return {
        ...state,
        tasks: currentTasksAgain,
        reports: {
          ...state.reports,
          data: [
            ...state.reports.data,
            {
              taskId: action.task.id,
              name: action.task.task,
              showInLegend: true,
              dataPoints: [{ y: action.task.score, label: '1' }],
            },
          ],
        },
      };

    case 'ADD-TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    case 'SET-REPORTS':
      return {
        ...state,
        reports: {
          ...state.reports,
          data: [...state.reports.data, action.report],
        },
      };

    default:
      return state;
  }
};
