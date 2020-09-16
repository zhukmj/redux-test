import React from 'react';
import { Header } from './Header';
import { MessageList } from './MessageList';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Message app</h1>
      <MessageList />
    </div>
  );
}

export default App;
