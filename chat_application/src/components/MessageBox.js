import React, {useState, useEffect} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MessageBox({message,time,index,id}) {
  let status = index%2 === 0? 'from': 'to';
  const [showOptions, setShowOptions] = useState(false);

  const deleteMessage = () => {
    
  }

  return (
    <div className={status === 'to'? 'message-container': 'message-container my-message'}>
        <button className='message-more-btn' onClick={() => setShowOptions(!showOptions)}><ExpandMoreIcon sx={{width: 40,height: 35}}/></button>
        <p className='message'>{message}</p>
        <p className='time'>{time}</p>

        <div className='message-options-container'>
          {showOptions && <button onClick={deleteMessage}>Delete message</button>}
        </div>
    </div>
  )
}

export default MessageBox;