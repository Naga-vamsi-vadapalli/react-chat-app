import React from 'react'
import theme from '../theme' // Import the theme

const ChatMessage = ({userName, message}) => {
  return (
    <div
      className="chat-message"
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <div className="user-name" style={{fontWeight: 'bold'}}>
        {userName}
      </div>
      <div className="message" style={{marginTop: '5px'}}>
        {message}
      </div>
    </div>
  )
}

export default ChatMessage
