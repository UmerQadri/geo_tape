import { MEASUREMENTS } from '../actionTypes';

export const addMeasurement = (measurementID, measurement) => ({
  type: MEASUREMENTS.ADD,
  measurementID,
  measurement,
});

export const deleteMeasurement = measurementID => ({
  type: MEASUREMENTS.DELETE,
  measurementID,
});
