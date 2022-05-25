import { MEASUREMENTS } from '../actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  measurements: {},
};

export default function measurementReducer(state = initialState, action) {
  switch (action.type) {
    case MEASUREMENTS.ADD:
      return {
        ...state,
        measurements: {
          ...state.measurements,
          [action.measurementID]: action.measurement,
        },
      };
    case MEASUREMENTS.DELETE:
      const _measurements = { ...state.measurements };
      delete _measurements[action.measurementID];
      return { ...state, measurements: _measurements };
    default:
      return state;
  }
}
