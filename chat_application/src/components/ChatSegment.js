import React from 'react';
import { Avatar } from '@mui/material';

function ChatSegment({image,name}) {
  return (
    <div className='chat-segment'>
      <Avatar alt='profile-pic' src={image} sx={{width: 60,height: 60}}></Avatar>
      <p>{name}</p>
    </div>
  )
}

export default ChatSegment;