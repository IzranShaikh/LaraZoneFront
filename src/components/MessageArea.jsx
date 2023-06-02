import React, { useState, useEffect } from 'react';

const MessageArea = ({ selectedChannelId }) => {
  const [messages, setMessages] = useState([]);

  // Fetch messages based on the selected channel ID
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `http://localhost:8000/api/content/${selectedChannelId}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setMessages(jsonData.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedChannelId) {
      fetchMessages();
    }
  }, [selectedChannelId]);

  return (
    <div>
      <h2>Message Area</h2>
      <div className="col-md-10">
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.context}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageArea;