import { ADD_MESSAGE, DELETE_ALL_MESSAGES } from './actions';

export const messageReducer = (messages = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, action.text];
    case DELETE_ALL_MESSAGES:
      return [];
    default:
      return messages;
  }
};
