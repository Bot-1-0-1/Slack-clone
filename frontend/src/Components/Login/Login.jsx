import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from '../../StateManagement/reducer';
import { useStateValue } from '../../StateManagement/StateProvider';


function Login() {

    const [state ,dispatch]= useStateValue();

    const SignIn = () => {
        const auth = getAuth();                                         // On clicking the button we are logging in
        const provider = new GoogleAuthProvider();                      // On logging in the signInWithPopup returns a promise having the completed state which has the data of the user 
        signInWithPopup(auth, provider)
          .then((result) => {                                           // the completed state is returned here
            //console.log(result);
            dispatch( {                                                 // We are dispatching the action SET_USER and setting the user with the user got from the promise
                type: actionTypes.SET_USER,
                user : result.user
            })
          })
          .catch(error=>alert(error.message));
    }
  return (
    <div className='login'>
        <div className="login_container">
        <img src="https://assets.brandfolder.com/pl546j-7le8zk-afym5u/v/3033396/original/Slack_Mark_Web.png" alt="Slack - New Slack Logo Png@pngkey.com"/>        
        <h1 className="head">Sign In to the Workplace</h1>
        <p> Test Project</p>
        <Button onClick={SignIn}> Sign In with Google</Button>
        </div>
    </div>
  )
}

export default Login


//display : grid
//place-item : center