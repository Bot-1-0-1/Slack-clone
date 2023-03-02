import React from 'react'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import './Header.css'
import { useStateValue } from '../../StateManagement/StateProvider';


const Header = () => {


  const [{user}] = useStateValue();

  return (
    <div className='header'>

        <div className="header_left">
            <Avatar className='header_avatar' alt= {user?.displayName} src ={ user?.photoURL}/>
            <AccessTimeIcon/>
        </div>

        <div className="header_search">
            <SearchIcon/>
            <input placeholder = "search group"/>
        </div>

        <div className="header_right">
            <HelpIcon/>
        </div>
    </div>
  )
}

export default Header