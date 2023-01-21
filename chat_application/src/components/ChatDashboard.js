import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypeEnum } from '../redux/actionTypes';
import MessageBox from './MessageBox';

function ChatDashboard() {

  const myState = useSelector(state => state.updateProperties);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    let data = await fetch('/messages');
    let messages = await data.json();
    setMessages(messages);
  }

  useEffect(() => {
    if(myState.fetchMessages){
      fetchMessages();

      dispatch({
        type: actionTypeEnum.FETCH_MESSAGES,
        fetchMessages: false
      })
    }
  },[myState.fetchMessages])

  return (
    <div className='chat-dashboard' id='chat-dashboard'>
        {
          messages.map((message,index) => {
            return <MessageBox 
                    message={message.message} 
                    key={index} 
                    time = {String(message.time).substring(11,16)} 
                    index = {index}
                    id = {message.id}/>
          })
        }
    </div>
  )
}

export default ChatDashboard;