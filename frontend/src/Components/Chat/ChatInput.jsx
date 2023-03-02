import React ,{useState} from 'react'
import db from '../Firebase/firebase';
import { useStateValue } from '../../StateManagement/StateProvider'
import { collection, addDoc,doc, serverTimestamp } from "firebase/firestore";
import "./ChatInput.css"

function ChatInput( { channelName , channeld} ) {

    const [input, setinput] = useState('');

    const [{user}]=useStateValue();

    const sendMessage = (e)=>{
        e.preventDefault();
        if(channeld)
        {
            
            const dbRef = doc(db, "rooms",channeld);
            const colRef =collection(dbRef , "messages")

            addDoc(colRef, {
                message: input,
                timestamp : serverTimestamp(),
                user: user.displayName,
                userImage : user.photoURL
                
            });
        }
    }

  return (
    <div className='chatInput'>
        <form >
            <input value={input} onChange={ e=>setinput(e.target.value)} placeholder={`Message #${channelName}`} />
            <button type="submit" onClick={sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput