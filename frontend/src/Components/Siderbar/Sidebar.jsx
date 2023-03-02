import React, { useState , useEffect} from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption';
import AddCommentIcon from '@mui/icons-material/AddComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { collection,onSnapshot } from 'firebase/firestore';
import db from '../Firebase/firebase';
import { useStateValue } from '../../StateManagement/StateProvider';


const Sidebar = () => {

    const [{user}]=useStateValue();

    const [channels ,setChannels ]= useState ([]);  
    useEffect(() => {
            const dbref = collection(db , "rooms");
            onSnapshot(dbref ,(snapshot)=>{
            setChannels(snapshot.docs.map((doc)=>({
                id: doc.id,
                name : doc.data().name
            })))
           })     
  
    }, [])
    
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <div className="sidebar_info">
            <h2>Team Zero</h2>
            <h3>
                <FiberManualRecordIcon/>
                {user?.displayName}
            </h3>
            </div>
            <CreateIcon/>
            
        </div>
            <SidebarOption Icon ={ AddCommentIcon } title = { "Threads" }/>
            <SidebarOption Icon={InboxIcon} title = { "Mentions & Reactions" }/>
            <SidebarOption Icon={DraftsIcon} title = { "Saved Items" }/>
            <SidebarOption Icon={BookmarkBorderIcon} title = { " Channel browser" }/>
            <SidebarOption Icon={PeopleAltIcon} title = { "People & User groups" }/>
            <SidebarOption Icon={AppsIcon} title = { "Apps" }/>
            <SidebarOption Icon={FileCopyIcon} title = { "File Browser" }/>
            <SidebarOption Icon={ExpandLessIcon} title = { "Show less" }/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title = { "Channels" }/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title = { "Add Channels" }/>
        {/* Connect to Db and list all the channels  */}
        {/* SideBaroption */}
        {/* SideBarOption */}
        { channels.map( channel => ( 
            <SidebarOption title = { channel.name } id = { channel.id } key={ channel.id }/>
        ))}
    </div>
  )
}

export default Sidebar