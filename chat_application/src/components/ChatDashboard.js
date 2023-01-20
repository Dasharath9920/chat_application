import React from 'react';
import MessageBox from './MessageBox';

function ChatDashboard() {

  let chat1 = 'Hey, how are you?';
  let chat2 = "I'm good. How are you?";

  return (
    <div className='chat-dashboard'>
        <MessageBox message={chat1} status='from'/>
        <MessageBox message={chat2} status='to' />
    </div>
  )
}

export default ChatDashboard;