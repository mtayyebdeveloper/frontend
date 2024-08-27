import React from "react";

const ChatMessage = ({ message, isOwnMessage }) => {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`max-w-xs sm:max-w-sm lg:max-w-md px-4 py-2 rounded-lg ${isOwnMessage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
