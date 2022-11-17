import Navbar from "./Components/Navbar"
import TextArea from "./Components/TextArea"

import "./App.css";
function App() {
  return (
    <>
      <Navbar title="TextUtils" /> {/* here i am passing props named title*/}
      <div className="container mt-3" >
        <TextArea heading="Enter the text to analyse"/>
      </div>
    </>
  );
}

export default App;
