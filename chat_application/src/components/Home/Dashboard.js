import {  React,useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatDashboard from '../ChatDashboard';
import { actionTypeEnum } from '../../redux/actionTypes';

function Home() {
  const myState = useSelector(state => state.updateProperties);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  let profile = myState.profiles[myState.currentChat];

  const sendMessage = async () => {
    if(!message.length)
      return;
    
    await fetch('/messages/create/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    setMessage('');
    
    dispatch({
      type: actionTypeEnum.FETCH_MESSAGES,
      fetchMessages: true
    })
  }

  return (
    <div className='dashboard'>
      <div className="dashboard-navbar">
        <div className="dashboard-navbar__left">
          <Avatar alt='profile pic' src={profile.image} sx={{width: 50, height: 50}}></Avatar>
          <div className="chat-header">
            <p className='chat-profile-name'>{profile.name}</p>
            {profile.isOnline && <p className='online-status'>online</p>}
          </div>
        </div>

        <div className="dashboard-navbar__right">
          <div className="search-container">
            <SearchIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
            <input type="text" placeholder='Search for a chat'/>
            <button><MoreVertIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/></button>
          </div>
        </div>
      </div>
      
      <ChatDashboard />

      <div className="dashboard-footer">
        <MoodRoundedIcon sx={{width: 40, height: 40, color: 'rgb(93, 93, 93)'}}/>
        <AttachFileRoundedIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
        <div className="search-container">
            <input type="text" placeholder='Type a message' value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button onClick={sendMessage}>
          <SendRoundedIcon sx={{width: 30, height: 30, color: message.length > 0? 'rgb(42, 202, 251)': 'rgb(93, 93, 93)'}}/>
        </button>
      </div>
    </div>
  )
}

export default Home;