import { useContext } from 'react';
import { MessageContext } from './MessageContext';

export const useMessages = () => {
  const { messages } = useContext(MessageContext);

  return messages;
};

export const useAddMessage = () => {
  const { addMessage } = useContext(MessageContext);
  return addMessage;
};
