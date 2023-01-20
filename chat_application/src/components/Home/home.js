import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Home() {

  let profile = {
    name: 'Sweet',
    image: require('../../assets/images/sweet.jpg')
  }
  let isOnline = true;

  return (
    <div className='home'>
      <div className="home-navbar">
        <div className="home-navbar__left">
          <Avatar alt='profile pic' src={profile.image} sx={{width: 50, height: 50}}></Avatar>
          <div className="chat-header">
            <p className='chat-profile-name'>{profile.name}</p>
            {isOnline && <p className='online-status'>online</p>}
          </div>
        </div>

        <div className="home-navbar__right">
          <div className="search-container">
            <SearchIcon sx={{width: 30, height: 30}}/>
            <input type="text" placeholder='Search for chat'/>
            <button><MoreVertIcon sx={{width: 30, height: 30}}/></button>
          </div>
        </div>
      </div>
      <div className="dashboard"></div>
    </div>
  )
}

export default Home;