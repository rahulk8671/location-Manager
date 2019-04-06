// Bandwidth Reducer

const bandwidthsReducerDefaultState = [];

export default (state = bandwidthsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BANDWIDTH':
      return [
        ...state,
        action.bandwidth
      ];
    case 'REMOVE_BANDWIDTH':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_BANDWIDTH':
      return state.map((bandwidth) => {
        if (bandwidth.leasedCircuitId === action.id && bandwidth.status === true) {
          return {
            ...bandwidth,
            ...action.updates
          };
        } else {
          return bandwidth;
        };
      });
    default:
      return state;
  }
};
