import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css'
const API_KEY = 'AIzaSyBDkbHrRLHKuI1nQq0wbvKS2E98g7EYqkY';
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatboxRef = useRef(null);

  // Auto-scroll function
  const autoScroll = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  // Function to create a chat message
  const createChatLi = (message, className) => ({
    className: `chat ${className}`,
    content: className === 'outgoing' ? <p>{message}</p> : <><span className="material-symbols-outlined"></span><p>{message}</p></>
  });

  // Function to generate a response
  const generateResponse = async (userMessage) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [{ text: userMessage }]
        }]
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const responseText = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, createChatLi(responseText, 'incoming')]);
        autoScroll();
      } else {
        console.error('No candidates in the response.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Gemini:', error);
    }
  };

  // Handle sending the chat message
  const handleChat = () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, createChatLi(userMessage, 'outgoing')]);
    setInputValue('');

    autoScroll(); // Call auto-scroll after adding user message

    setTimeout(() => {
      setMessages(prev => [...prev, createChatLi("I'm thinking about something...", 'incoming')]);
      autoScroll(); // Call auto-scroll after adding thinking message
      generateResponse(userMessage);
    }, 600);
  };

  // Effect to auto-scroll on new messages
  useEffect(() => {
    autoScroll();
  }, [messages]);

  return (
    <div className="chatbot">
      <header>
        <h2>ChatBot</h2>
      </header>
      <ul className="chatbox" ref={chatboxRef}>
        {messages.map((msg, index) => (
          <li key={index} className={msg.className}>
            {msg.content}
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          className="textarea"
          placeholder="Enter a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <span onClick={handleChat} className="material-symbols-outlined">send</span>
      </div>
    </div>
  );
};

export default Chatbot;