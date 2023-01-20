import React from 'react'

function MessageBox({message,status}) {
    const date = new Date();
    let time = date.getHours() + ':' + date.getMinutes();
  return (
    <div className={status === 'to'? 'message-container': 'message-container my-message'}>
        <p className='message'>{message}</p>
        <p className='time'>{time}</p>
    </div>
  )
}

export default MessageBox;