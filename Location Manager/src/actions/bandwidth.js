import uuid from 'uuid';

// ADD_EXPENSE
export const addBandwidth = (bandwidth) => ({
  type: 'ADD_BANDWIDTH',
  bandwidth
});

// REMOVE_EXPENSE
export const removeBandwidth = ({ id } = {}) => ({
  type: 'REMOVE_BANDWIDTH',
  id
});

// EDIT_EXPENSE
export const editBandwidth = (id, updates) => ({
  type: 'EDIT_BANDWIDTH',
  id,
  updates
});
