import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatSegment from '../ChatSegment';

function Sidebar() {

  let profiles = [
    {
      name: 'Dasharath',
      image: require('../../assets/images/dasharath.jpeg')
    },
    {
      name: 'Sweet',
      image: require('../../assets/images/sweet.jpg')
    }
  ]

  return (
    <div className='sidebar'>
      <div className="sidebar-navbar">
        <div className="avatar"><Avatar alt='avatar' sx={{width: 60, height: 60}}></Avatar></div>
        <div className="sidebar-navbar__icons"></div>
      </div>

      <div className="sidebar-search-container">
        <SearchIcon sx={{width: 30, height: 30}}/>
        <input type="text" placeholder='Search'/>
      </div>

        {
          profiles.length > 0 &&
          <div className="chat-container">
              {profiles.map((profile,index) => {
                return <ChatSegment name={profile.name} image={profile.image} key={index}/>
              })}
          </div>
        }

      {
        profiles.length == 0 &&
        <div className="empty-chat">
          <h3>No chat found</h3>
        </div>
      }
    </div>
  )
}

export default Sidebar;