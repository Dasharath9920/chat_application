import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatSegment from '../ChatSegment';

function Sidebar() {

  const myState = useSelector(state => state.updateProperties);
  const dispatch = useDispatch();

  const myProfile = myState.myProfile;
  const profiles = myState.profiles;

  return (
    <div className='sidebar'>
      <div className="sidebar-navbar">
        <div className="avatar"><Avatar alt='avatar' src={myProfile.profilePic} sx={{width: 50, height: 50}}></Avatar></div>
        <div className="sidebar-navbar__icons"></div>
      </div>

      <div className="search-container">
        <SearchIcon sx={{width: 30, height: 30, color: 'rgb(93, 93, 93)'}}/>
        <input type="text" placeholder='Search'/>
      </div>

        {
          profiles.length > 0 &&
          <div className="chat-container">
              {profiles.map((profile,index) => {
                return <ChatSegment name={profile.name} image={profile.image} index={index} key={index}/>
              })}
          </div>
        }

      {
        profiles.length === 0 &&
        <div className="empty-chat">
          <h3>No chat found</h3>
        </div>
      }
    </div>
  )
}

export default Sidebar;