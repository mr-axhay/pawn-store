import { useState } from "react";
import axios from "axios";
import "./AIChat.css";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await axios.post("http://localhost:3001/api/chat", {
        message: input
      });

      const botMessage = { role: "bot", text: res.data.reply };

      setMessages(prev => [...prev, botMessage]);
      setInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-header">AI Assistant</div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}