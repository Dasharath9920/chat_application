import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import { actionTypeEnum } from '../redux/actionTypes';

function ChatSegment({image,name,index}) {

  const dispatch = useDispatch();

  const updateCurrentChat = () => {
    dispatch({
      type: actionTypeEnum.UPDATE_CURRENT_CHAT,
      currentChat: index
    });
  }

  return (
    <div className='chat-segment' onClick={updateCurrentChat}>
      <Avatar alt='profile-pic' src={image} sx={{width: 60,height: 60}}></Avatar>
      <p>{name}</p>
    </div>
  )
}

export default ChatSegment;