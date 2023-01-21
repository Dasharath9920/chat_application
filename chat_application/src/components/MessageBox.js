import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BlockIcon from '@mui/icons-material/Block';
import { actionTypeEnum } from '../redux/actionTypes';

function MessageBox({message,index}) {

  const dispatch = useDispatch()

  let status = index%2 === 0? 'from': 'to';
  let time = String(message.time).substring(11,16);
  const [showOptions, setShowOptions] = useState(false);

  const deleteMessage = () => {
    let obj = {
      'message': 'This message was deleted',
      'deleted': 'True'
    }

    fetch(`/messages/delete/${message.id}/`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    dispatch({
      type: actionTypeEnum.FETCH_MESSAGES,
      fetchMessages: true
    })
  }

  return (
    <div className={status === 'to'? 'message-container': 'message-container my-message'} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
        {!message.deleted && <button className='message-more-btn' onClick={() => setShowOptions(!showOptions)}><ExpandMoreIcon sx={{width: 40,height: 35}}/></button>}
        {message.deleted && <BlockIcon sx={{color: 'grey'}}/>}
        <p className={message.deleted? 'message deleted': 'message'}>{message.message}</p>
        <p className='time'>{time}</p>

        <div className='message-options-container'>
          {showOptions && !message.deleted && <button onClick={deleteMessage}>Delete message</button>}
        </div>
    </div>
  )
}

export default MessageBox;