import Navbar from "./Components/Navbar"
import TextArea from "./Components/TextArea"
import About from "./Components/About";
import "./App.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import React,{useState} from "react";

function App() {
  const [dark,setDark] = useState(false); // it shows weather dark mode is enabled or not
  const toggleMode = ()=>{
    if(dark===false){
      setDark(true);
      document.body.style.backgroundColor = '#222334';
    }else{
      setDark(false);
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" switch={dark} toggleMode={toggleMode}/> {/* here i am passing props named title*/}
      <div className="container mt-3" >
        {/* <TextArea heading="Enter the text to analyse" switch={dark} /> */}
      {/* <About/> */}
      <Routes>
        <Route exact path="/About" element={<About></About>}/>
        <Route exact path="/" element={<TextArea heading="Enter the text to analyse" switch={dark} />}/>
      </Routes>
      </div>
      </Router>  
    </>
  );
}

export default App;
