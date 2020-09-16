export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES';

export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  text,
});

export const deleteAllMessage = () => ({
  type: DELETE_ALL_MESSAGES,
});
