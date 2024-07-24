import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [confirmar, setConfirm] = useState(false);

  console.log(confirmar);

const handleSubmit =()=>{
  
}


  return (
    <>
      <div className="App">
        <Card />
      </div>
    </>
  );
}

export default App;
 