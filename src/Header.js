import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const messages = useSelector((state) => state);

  return <header>Messages: {messages.length}</header>;
};
