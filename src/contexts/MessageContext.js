import React, { useCallback, useState } from 'react';

export const MessageContext = React.createContext([]);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(['Message 1', 'Message 2']);

  const addMessage = useCallback(() => {
    setMessages([...messages, `Message ${messages.length + 1}`]);
  }, [messages]);

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
