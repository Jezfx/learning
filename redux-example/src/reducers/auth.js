// reducer is just a switch statement that handles each of the actions that we define

// a reducer must be pure, immutable and only return the updated state

export const ui = (state = {}, { type, status }) => {
  switch (type) {
    case "SET_PROGRESS_BAR":
      return Object.assign({}, state, { progressBarStatus: status });
    default:
      return state;
  }
};

export default ui;
