import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Siderbar/Sidebar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';
import { useStateValue } from './StateManagement/StateProvider';
import { useState } from 'react';


function App() {

 const [{user} , dispatch ] =useStateValue();
  //const [user, setuser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user? (<Login/>) :
        <>
        <Header/>
        <div className='app_body'>
          <Sidebar/>
            <Routes>
              <Route path='/room/:roomId' element={<Chat/>}/>
              <Route path='/' element={<h1>WELCOME</h1>}/>
            </Routes>

        </div>
        </>}
        

      </Router>
     
    </div>
  );
}

export default App;
