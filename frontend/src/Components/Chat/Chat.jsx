import "./Chat.css"
import { useParams } from "react-router-dom"
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import db from "../Firebase/firebase";
import { doc, onSnapshot, orderBy, query, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import Message from "./Message/Message";
import ChatInput from "./ChatInput";

function Chat() {
    const { roomId } = useParams();

    const [roomDetails, setroomDetails] = useState(null);
    const [roomMessages, setroomMessages] = useState([]);

    useEffect(() => {

        if(roomId){
            onSnapshot(doc(db, 'rooms',roomId) ,(snapshot)=>{
                setroomDetails(snapshot.data());
                console.log(snapshot.data());
           })      
        }

        const msgColl = query(collection(db, "rooms",roomId,"messages"), orderBy('timestamp'));
        onSnapshot( msgColl , (snapshot)=>{
            setroomMessages(snapshot.docs.map( doc => doc.data()));
        })
       
    }, [roomId])

// // console.log(roomDetails?.doc?.id);
    // console.log(roomMessages?.getId());
//     console.log(roomId);
  return ( 
    <div className="chat">
        <div className="chat_header">
            <div className="chat_header_left">
                <h4 className="chat_channelName">
                    <strong> # {roomDetails?.name} </strong>
                    <StarBorderIcon/>
                </h4>
            </div>
            <div className="chat_header_right">
                <p>
                    <InfoIcon/> Details
                </p>
            </div>
        </div>
        <div className="chat_message">
            {/* Messages */}
            {roomMessages.map(({ message ,timestamp ,user ,userImage}) =>(
                <Message message={message} timestamp={timestamp} username = {user} userImage={ userImage}  key={timestamp}/>
            ))}
            
        </div>
        <ChatInput channelName = {roomDetails?.name} channeld={roomId}/>
    </div>
  )
}

export default Chat