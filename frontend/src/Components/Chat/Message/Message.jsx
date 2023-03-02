import React from 'react'
import "./Message.css"


function Message({message , timestamp , username ,userImage}) {
  return (
    <div className='message'>
        <img src={userImage} alt=""/>
        <div className="messageInfo">
            <h4>
                {username}  <span className="time_stamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            <p style={{fontWeight:"600"}}>{message}</p>
        </div>
    </div>
  )
}

export default Message