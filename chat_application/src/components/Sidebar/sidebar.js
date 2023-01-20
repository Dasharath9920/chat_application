import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
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
      
      <div className="chat-container"></div>
    </div>
  )
}

export default Sidebar;