import uuid from 'uuid';

// ADD_EXPENSE
export const addLocation = (location) => ({
  type: 'ADD_LOCATION',
  location
});

// REMOVE_EXPENSE
export const removeLocation = ({ id } = {}) => ({
  type: 'REMOVE_LOCATION',
  id
});

// EDIT_EXPENSE
export const editLocation = (id, updates) => ({
  type: 'EDIT_LOCATION',
  id,
  updates
});
