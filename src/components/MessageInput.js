import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="flex-1 border border-gray-300 p-2 rounded-l-lg"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
