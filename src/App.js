import React, {useState} from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

const App = () => {
  const [messages, setMessages] = useState([])

  const handleSend = message => {
    setMessages([...messages, message])
  }

  return (
    <div>
      <h1>Chat Messages</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} userName="Random User" message={message} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  )
}

export default App
