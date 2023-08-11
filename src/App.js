// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import Alert from './components/alert';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null);
  const showalert = (message,type)=>{
    setAlert({

      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  };

  const toggleMode = ()=>{
     if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode has been enabled","success");
     }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success")
     }
    //  console.log(mode);
  }
  return (
    <>
    <Router>

    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">

      <Routes>
        <Route path='/' element={<Textform showalert={showalert} heading="Enter the text here" mode={mode}/>} ></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
      </Routes>
    {/* <Textform showalert={showalert} heading="Enter the text here" mode={mode}/> */}
    </div>
  
   
    

  {/* <Router>

<Navbar title="TextUtils" aboutText="About TextUtils"/>
<Routes>

<Route path="/" element={<Textform showalert={showalert} heading="Enter the text here" mode={mode}/>}></Route>
<Route path="/aboutus" element={<Aboutus/>}></Route>
</Routes>
<Textform showalert={showalert} heading="Enter the text here" mode={mode}/>
</Router> */}
    
   
</Router>
    </>
  );
}

export default App;
