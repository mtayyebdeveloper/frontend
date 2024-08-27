import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", isOwn: false },
    { text: "Hi! How are you?", isOwn: true },
  ]);

  const addMessage = (message) => {
    setMessages([...messages, { text: message, isOwn: true }]);
  };

  return (
    <div className="flex flex-col w-full sm:w-2/3 lg:w-3/4 h-full bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isOwnMessage={message.isOwn} />
        ))}
      </div>
      <MessageInput onSend={addMessage} />
    </div>
  );
};

export default ChatWindow;
