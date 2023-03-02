import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom"
import db from "../Firebase/firebase";
import { collection , addDoc } from "firebase/firestore";

function SidebarOption({ Icon, title, addChannelOption, id }) {

  const dbRef = collection(db,'rooms');           // Local reference to the db
  
  const history = useNavigate();
  const addChannel = ( ) => {
    const channelName = prompt('Please Enter the channel name');
    if(channelName)
    {
      addDoc( dbRef , {                           // It has 2 parameters reference and the data object that has to be passed
        name: channelName
      })
    }
  }

  const selectChannel= () => {
    if(id){
        history(`/room/${id}`)
    }
    else{
      history(title);
    }
  }
  return (
    <div className="sidebarOption" onClick={addChannelOption  ? addChannel : selectChannel}>
      {Icon && <Icon className=" sidebarOption_icon" />}
      {Icon ? <h3>{title} </h3> : <h3 className="sidebarOption_channel"><span className="sidebarOption_hash">#</span> {title}</h3>}
    </div>
  );
}

export default SidebarOption;
