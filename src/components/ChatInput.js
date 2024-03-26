import React, {useState} from 'react'
import theme from '../theme' // Import the theme

const ChatInput = ({onSend}) => {
  const [message, setMessage] = useState('')

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (message.trim()) {
      onSend(message)
      setMessage('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{backgroundColor: theme.colors.secondary, padding: '20px'}}
    >
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: `1px solid ${theme.colors.primary}`,
          marginRight: '10px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: theme.colors.primary,
          color: theme.colors.secondary,
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
