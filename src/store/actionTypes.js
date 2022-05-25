const ADD = 'ADD';
const DELETE = 'DELETE';
const FAILURE = 'FAILURE';
const defaultTypes = [ADD, DELETE, FAILURE];

const createRequestTypes = (base, types = defaultTypes) => {
  const res = {};
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });

  return res;
};

export const MEASUREMENTS = createRequestTypes('MEASUREMENTS');
