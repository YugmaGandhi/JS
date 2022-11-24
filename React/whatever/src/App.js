import Navbar from "./Components/Navbar"
import TextArea from "./Components/TextArea"
import React,{useState} from "react";

import "./App.css";
import About from "./Components/About";
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
      <Navbar title="TextUtils" switch={dark} toggleMode={toggleMode}/> {/* here i am passing props named title*/}
      <div className="container mt-3" >
        <TextArea heading="Enter the text to analyse" switch={dark} />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
