import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';
import Alert from './Components/Alert';

function App() {

  const[mode, setmode] = useState('light');
  const[alert, setAlert] = useState(null);

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      toggleAlert('Dark Mode Enabled', 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      toggleAlert('Light Mode Enabled', 'success');
    }
  }

  const toggleAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() =>{
      setAlert(null);
    }, 3000);
  }

  return (
    <>
    <Navbar title="MyApplication" mode={mode} toggleMode={toggleMode}/>
    <Alert heading="Alert!" Alert={alert}/>
    <div className="container my-3">
    <Homepage heading="Text Analyzer" mode={mode} Alert={toggleAlert}/>
    </div>
    </>
  );
}

export default App;
