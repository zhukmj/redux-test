import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './redux/actions';

export const MessageList = () => {
  const messages = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddMessage = useCallback(
    () => dispatch(addMessage(`Message ${messages.length + 1}`)),
    [dispatch, messages],
  );

  return (
    <main>
      <h2>Messages:</h2>
      <ol>
        {messages.map((message, i) => (
          <li key={message}>{message}</li>
        ))}
      </ol>
      <button onClick={handleAddMessage}>Add message</button>
    </main>
  );
};
