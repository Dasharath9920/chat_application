import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import ChatDashboard from '../ChatDashboard';

function Home() {

  let profile = {
    name: 'Sweet',
    image: require('../../assets/images/sweet.jpg')
  }
  let isOnline = true;

  return (
    <div className='dashboard'>
      <div className="dashboard-navbar">
        <div className="dashboard-navbar__left">
          <Avatar alt='profile pic' src={profile.image} sx={{width: 50, height: 50}}></Avatar>
          <div className="chat-header">
            <p className='chat-profile-name'>{profile.name}</p>
            {isOnline && <p className='online-status'>online</p>}
          </div>
        </div>

        <div className="dashboard-navbar__right">
          <div className="search-container">
            <SearchIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
            <input type="text" placeholder='Search for chat'/>
            <button><MoreVertIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/></button>
          </div>
        </div>
      </div>
      
      <ChatDashboard />

      <div className="dashboard-footer">
        <MoodRoundedIcon sx={{width: 40, height: 40, color: 'rgb(93, 93, 93)'}}/>
        <AttachFileRoundedIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
        <div className="search-container">
            <SearchIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
            <input type="text" placeholder='Type a message'/>
        </div>
      </div>
    </div>
  )
}

export default Home;